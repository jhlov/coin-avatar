import Grid from "@toast-ui/react-grid";
import axios from "axios";
import _ from "lodash";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "tui-grid/dist/tui-grid.css";
import { OptColumn } from "tui-grid/types/options";
import { TierTableData } from "./../types/TierTableData";
import { utils } from "./../utils";
import "./Condition.scss";
import { getTierTable } from "./tierTable";

interface Props {
  market: string;
  seed: number;
  strategy: string;
  marketList: string[];
  setGrid: (grid: Grid) => void;
}

const ConditionTable = (props: Props) => {
  const [curPriceList, setCurPriceList] = useState<{ [key: string]: number }>({
    BTC: 57455000,
    ETH: 4652000,
    XRP: 1015,
    ADA: 1615
  });

  const [tier, setTier] = useState<number>(0);
  const [tierTable, setTierTable] = useState<TierTableData[]>([]);
  const grid = useRef(null);

  useEffect(() => {
    // 현재 코인 가격 불러오기
    props.marketList.forEach(e => {
      axios
        .get(
          `https://api.upbit.com/v1/candles/minutes/1?market=KRW-${e}&count=1`
        )
        .then(response => {
          setCurPriceList({
            ...curPriceList,
            [e]: response.data[0].trade_price
          });
        });
    });
  }, []);

  useEffect(() => {
    if (props.strategy !== "custom") {
      setTier(parseInt(props.strategy.replace(/[^0-9]/g, "")));
      setTierTable(_.cloneDeep(getTierTable(props.strategy)));
    }
  }, [props]);

  useEffect(() => {
    if (grid.current) {
      props.setGrid(grid.current as Grid);
    }
  }, [grid]);

  const getBuyGuide = (i: number): number => {
    if (grid.current) {
      const curPrice = curPriceList[props.market];

      const gridInstance = (grid.current as Grid).getInstance();
      const gridData = gridInstance.getData();
      if (props.strategy === "custom") {
        Array(gridData.length)
          .fill(0)
          .forEach((_, i) => {
            const temp = gridInstance.getValue(i, "buy_condition");
          });
      }

      return Math.round(
        gridData
          .slice(0, i + 1)
          .reduce((p, c: any) => p + (p * c.buy_condition) / 100, curPrice)
      );
    }

    return 0;
  };

  const getSellGuide = (
    i: number,
    sell_condition_type: string,
    sell_condition_value: number
  ): number => {
    const buyGuide = getBuyGuide(i);
    return sell_condition_type === "yield"
      ? Math.round(buyGuide * (1 + sell_condition_value / 100))
      : Math.round(getBuyGuide(sell_condition_value - 1));
  };

  const getSeed = (i: number): number => {
    if (grid.current) {
      const gridInstance = (grid.current as Grid).getInstance();
      const gridData: any = gridInstance.getData();
      if (gridData.length <= i) {
        return 0;
      }

      if (props.strategy === "custom") {
        Array(gridData.length)
          .fill(0)
          .forEach((_, i) => {
            const temp = gridInstance.getValue(i, "seed_rate");
          });
      }

      return Math.round((props.seed * gridData[i].seed_rate) / 100);
    }

    return 0;
  };

  const getTier1Ratio = (i: number): number => {
    const curPrice = curPriceList[props.market];
    const buyGuide = getBuyGuide(i);
    return i === 0 ? 0 : (buyGuide / curPrice) * 100 - 100;
  };

  // 초기 데이터
  const tableData = useMemo(() => {
    if (_.isEmpty(tierTable) || tier === 0) {
      return [];
    }

    return Array(tier)
      .fill(0)
      .map((_, i) => {
        return {
          id: i,
          tier: i + 1,
          buy_condition: tierTable[i].buy,
          sell_condition_type: tierTable[i].sell.type,
          sell_condition_value: tierTable[i].sell.value,
          seed_rate: tierTable[i].seed
        };
      });
  }, [tierTable, tier]);

  const complexColumns = [
    {
      header: "매도 기준",
      name: "sell_condition",
      childNames: ["sell_condition_type", "sell_condition_value"]
    }
  ];

  const columns: OptColumn[] = [
    {
      name: "tier",
      header: "티어",
      align: "center",
      width: 30
    },
    {
      name: "buy_guide",
      header: "매수 가이드",
      align: "center",
      formatter: props => {
        const row = props.row as any;
        return utils.intComma(getBuyGuide(row.rowKey)) + "원";
      },
      width: 110
    },
    {
      name: "sell_guide",
      header: "매도 가이드",
      align: "center",
      formatter: props => {
        const row = props.row as any;
        return (
          utils.intComma(
            getSellGuide(
              row.rowKey,
              row.sell_condition_type,
              row.sell_condition_value
            )
          ) + "원"
        );
      },
      width: 110
    },
    {
      name: "buy_condition",
      header: "매수 기준",
      align: "center",
      editor: props.strategy === "custom" ? "text" : undefined,
      formatter: (props: any) => {
        if (props.value === 0 || props.value === "") {
          return "현재가";
        } else {
          return `${Number(props.value).toFixed(2)}%`;
        }
      },
      validation: {
        dataType: "number",
        max: 0
      },
      width: 80
    },
    {
      name: "sell_condition_type",
      header: "타입",
      align: "center",
      width: 80,
      editor:
        props.strategy === "custom"
          ? {
              type: "select",
              options: {
                listItems: [
                  { text: "수익", value: "yield" },
                  { text: "평단", value: "tier" }
                ]
              }
            }
          : undefined,
      formatter: (props: any) => {
        return props.value === "yield" ? "수익" : "평단";
      }
    },
    {
      name: "sell_condition_value",
      header: "값",
      align: "center",
      editor: props.strategy === "custom" ? "text" : undefined,
      formatter: (props: any) => {
        return props.row.sell_condition_type === "yield"
          ? props.value + "%"
          : props.value;
      },
      validation: {
        dataType: "number",
        min: 0
      },
      width: 70
    },
    {
      name: "seed_rate",
      header: "시드 비율",
      align: "center",
      editor: props.strategy === "custom" ? "text" : undefined,
      formatter: (props: any) => {
        return Number(props.value).toFixed(2) + "%";
      },
      validation: {
        dataType: "number",
        min: 0
      },
      width: 80
    },
    {
      name: "seed",
      header: "배정 시드",
      align: "center",
      width: 110,
      formatter: (props: any) => {
        return utils.intComma(getSeed((props.row as any).rowKey)) + "원";
      }
    },
    {
      name: "tier_1_ratio",
      header: "1티어 대비",
      align: "center",
      formatter: (props: any) => {
        return getTier1Ratio((props.row as any).rowKey).toFixed(2) + "%";
      },
      width: 80
    }
  ];

  return (
    <div className="card card-table">
      <Grid
        ref={grid}
        data={tableData}
        header={{
          height: 60,
          complexColumns
        }}
        columns={columns}
        rowHeight={30}
        minRowHeight={30}
        summary={{
          position: "bottom",
          height: 30,
          columnContent: {
            seed_rate: {
              template: valueMap => {
                return `SUM: ${Math.round(valueMap.sum)}%`;
              }
            }
          }
        }}
      />
    </div>
  );
};

export { ConditionTable };
