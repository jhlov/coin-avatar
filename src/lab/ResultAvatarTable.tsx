import React, { useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { utils } from "./../utils";
import { BacktestResponseData } from "./BacktestResponseData";

interface Props {
  responseData?: BacktestResponseData;
}

const ResultAvatarTable = (props: Props) => {
  const tableColumns = [
    {
      dataField: "id",
      text: "ID",
      hidden: true
    },
    {
      dataField: "tier",
      text: "티어"
    },
    {
      dataField: "money",
      text: "현금",
      formatter: (cell: number) => {
        return `${utils.intComma(cell)}원`;
      }
    },
    {
      dataField: "coin",
      text: "코인",
      formatter: (cell: number) => {
        return cell.toFixed(5);
      }
    },
    {
      dataField: "sell_count",
      text: "매도 횟수"
    },
    {
      dataField: "profit",
      text: "실현 수익",
      formatter: (cell: number) => {
        return `${utils.intComma(cell)}원`;
      }
    }
  ];

  const tableData = useMemo(() => {
    return (
      props.responseData?.avatar_coin_list.map((e, i) => ({
        id: i,
        tier: i + 1,
        money: props.responseData?.avatar_money_list[i],
        coin: e,
        sell_count: props.responseData?.trade_list.filter(
          trade => trade.type === "sell" && trade.tier === i + 1
        ).length,
        profit: props.responseData?.avatar_profit_list[i]
      })) ?? []
    );
  }, [props]);

  return (
    <div className="card card-table">
      <div className="title mb-2">아바타 별 자산</div>
      <BootstrapTable
        keyField="id"
        columns={tableColumns}
        data={tableData}
        bordered={false}
        striped
      />
    </div>
  );
};

export { ResultAvatarTable };
