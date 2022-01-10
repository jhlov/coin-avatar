import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { BacktestResponseData } from "./BacktestResponseData";
import "./Result.scss";
import { utils } from "./../utils";
import classNames from "classnames";
import BootstrapTable from "react-bootstrap-table-next";

interface Props {
  responseData?: BacktestResponseData;
}

const Result = (props: Props) => {
  const seed = useMemo(() => {
    return props.responseData?.seed ?? 0;
  }, [props]);

  const totalMoney = useMemo(() => {
    return (
      props.responseData?.avatar_money_list.reduce((p, c) => p + c, 0) ?? 0
    );
  }, [props]);

  const totalCoin = useMemo(() => {
    return props.responseData?.avatar_coin_list.reduce((p, c) => p + c, 0) ?? 0;
  }, [props]);

  const totalAssets = useMemo<number>((): number => {
    if (props.responseData) {
      return Math.round(
        props.responseData?.avatar_money_list.reduce((p, c) => p + c, 0) +
          props.responseData?.avatar_coin_list.reduce((p, c) => p + c, 0) *
            props.responseData.last_coin_price
      );
    }

    return 0;
  }, [props]);

  const totalAssetsRate = useMemo<number>((): number => {
    return (totalAssets / seed) * 100 - 100;
  }, [totalAssets, seed]);

  const profit = useMemo(() => {
    if (props.responseData) {
      return Math.round(
        props.responseData?.avatar_profit_list.reduce((p, c) => p + c, 0)
      );
    }

    return 0;
  }, [props]);

  const profitRate = useMemo(() => {
    return (profit / seed) * 100;
  }, [seed, profit]);

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
      dataField: "type",
      text: "타입",
      formatter: (cell: string) => {
        return cell === "buy" ? "매수" : "매도";
      }
    },
    {
      dataField: "tier",
      text: "티어"
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
    <div className="py-4">
      <Row className="summary mb-4">
        <Col>
          <div className="card">
            <div className="title">기간</div>
            <div className="content">{`${props.responseData?.start_date} ~ ${props.responseData?.end_date}`}</div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <div className="title">원금</div>
            <div className="content">{`${utils.intComma(seed)}원`}</div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <div className="title">총자산</div>
            <div className="content">{`${utils.intComma(totalAssets)}원`}</div>
            <div className="sub-content">{`(현금: ${utils.intComma(
              totalMoney
            )}원 / 코인: ${utils.intComma(totalCoin.toFixed(3))})`}</div>
            <div
              className={classNames("sub-content", [
                totalAssetsRate < 0 ? "blue" : "red"
              ])}
            >{`(수익률 ${utils.intComma(totalAssetsRate.toFixed(1))}%)`}</div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <div className="title">실현 수익</div>
            <div className="content">{`${utils.intComma(profit)}원`}</div>
            <div
              className={classNames("sub-content", [
                profitRate < 0 ? "blue" : "red"
              ])}
            >{`(수익률 ${utils.intComma(profitRate.toFixed(1))}%)`}</div>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <div className="card">
            <div className="title">월별 실현 수익</div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <div className="title">아바타별 실현 수익</div>
          </div>
        </Col>
      </Row>
      <div className="card">
        <div className="title mb-2">거래 내역</div>
        <BootstrapTable
          keyField="id"
          columns={tableColumns}
          data={tableData}
          bordered={false}
          striped
        />
      </div>
    </div>
  );
};

export { Result };
