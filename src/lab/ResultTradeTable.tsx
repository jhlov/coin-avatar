import React, { useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { utils } from "../utils";
import { BacktestResponseData } from "./BacktestResponseData";

interface Props {
  responseData?: BacktestResponseData;
}

const ResultTradeTable = (props: Props) => {
  const tableColumns = [
    {
      dataField: "id",
      text: "ID",
      hidden: true
    },
    {
      dataField: "datetime",
      text: "날짜"
    },
    {
      dataField: "tier",
      text: "티어"
    },
    {
      dataField: "type",
      text: "타입",
      formatter: (cell: string) => {
        return cell === "buy" ? "매수" : "매도";
      }
    },
    {
      dataField: "price",
      text: "가격",
      formatter: (cell: number) => {
        return `${utils.intComma(cell)}원`;
      }
    },
    {
      dataField: "count",
      text: "수량",
      formatter: (cell: number) => {
        return utils.intComma(cell.toFixed(5));
      }
    },
    {
      dataField: "money",
      text: "금액",
      formatter: (cell: number) => {
        return `${utils.intComma(cell)}원`;
      }
    },
    {
      dataField: "fee",
      text: "수수료",
      formatter: (cell: number) => {
        return `${utils.intComma(cell)}원`;
      }
    },
    {
      dataField: "profit",
      text: "실현 수익",
      formatter: (cell: number) => {
        return cell ? `${utils.intComma(cell)}원` : "";
      }
    }
  ];

  const tableData = useMemo(() => {
    return (
      props.responseData?.trade_list.map((e, i) => ({ ...e, id: i })) ?? []
    );
  }, [props]);

  return (
    <div className="card card-table">
      <div className="title mb-2">거래 내역</div>
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

export { ResultTradeTable };
