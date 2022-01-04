import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { utils } from "./../utils";
import "./Condition.scss";
import { getTierTable, TierTableData } from "./tierTable";

interface Props {
  market: string;
  seed: number;
  strategy: string;
  marketList: string[];
}

interface TableData {
  tier: number;
  buy_guide: string;
  sell_guide: string;
  buy_condition: string;
  sell_condition: string;
  seed_rate: string;
  seed: string;
  tier_1_ratio: string;
}

const ConditionTable = (props: Props) => {
  const [curPriceList, setCurPriceList] = useState<{ [key: string]: number }>({
    BTC: 57455000,
    ETH: 4652000,
    XRP: 1015,
    ADA: 1615
  });

  useEffect(() => {
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

  const tableColumns = useMemo(() => {
    return [
      {
        dataField: "tier",
        text: "Tier"
      },
      {
        dataField: "buy_guide",
        text: "매수 가이드"
      },
      {
        dataField: "sell_guide",
        text: "매도 가이드"
      },
      {
        dataField: "buy_condition",
        text: "매수 기준"
      },
      {
        dataField: "sell_condition",
        text: "매도 기준"
      },
      {
        dataField: "seed_rate",
        text: "시드 비율"
      },
      {
        dataField: "seed",
        text: "배정 시드"
      },
      {
        dataField: "tier_1_ratio",
        text: "1Tier 대비"
      }
    ];
  }, [props.market, props.seed, props.strategy]);

  const tableData = useMemo<TableData[]>(() => {
    const curPrice = curPriceList[props.market];
    const tierTable: TierTableData[] = getTierTable(props.strategy);
    const tier = parseInt(props.strategy.replace(/[^0-9]/g, ""));
    return Array(tier)
      .fill(0)
      .map((_, i) => {
        const buyGuide = Math.round(
          tierTable
            .slice(0, i + 1)
            .reduce((p, c) => p + (p * c.buy) / 100, curPrice)
        );
        return {
          tier: i + 1,
          buy_guide: utils.intComma(buyGuide) + "원",
          sell_guide:
            utils.intComma(
              tierTable[i].sell.type === "yield"
                ? Math.round(buyGuide * (1 + tierTable[i].sell.value / 100))
                : Math.round(
                    tierTable
                      .slice(0, tierTable[i].sell.value)
                      .reduce((p, c) => p + (p * c.buy) / 100, curPrice)
                  )
            ) + "원",
          buy_condition:
            tierTable[i].buy === 0
              ? "현재가"
              : `${tierTable[i].buy.toFixed(2)}%`,
          sell_condition:
            tierTable[i].sell.type === "yield"
              ? `${tierTable[i].sell.value.toFixed(2)}%`
              : `${tierTable[i].sell.value}평단`,
          seed_rate: `${tierTable[i].seed.toFixed(2)}%`,
          seed:
            utils.intComma(Math.round(props.seed * tierTable[i].seed)) + "원",
          tier_1_ratio:
            i === 0
              ? "0.00%"
              : `${((buyGuide / curPrice) * 100 - 100).toFixed(2)}%`
        };
      });
    return [];
  }, [props.market, props.seed, props.strategy]);

  return (
    <div className="card condition-table">
      <BootstrapTable
        keyField="tier"
        columns={tableColumns}
        data={tableData}
        bordered={false}
        striped
      />
    </div>
  );
};

export { ConditionTable };
