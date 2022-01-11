import classNames from "classnames";
import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { utils } from "./../utils";
import { BacktestResponseData } from "./BacktestResponseData";
import "./Result.scss";
import { ResultAvatarChart } from "./ResultAvatarChart";
import { ResultAvatarTable } from "./ResultAvatarTable";
import { ResultMonthlyChart } from "./ResultMonthlyChart";
import { ResultProductChart } from "./ResultProductChart";
import { ResultTradeChart } from "./ResultTradeChart";

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

  return (
    <div className="result py-4">
      <Row className="summary mb-4">
        <Col xs="12" md="6">
          <Row className="summary-right">
            <Col xs="12" md="6">
              <div className="card">
                <div className="title">기간</div>
                <div className="content">{`${props.responseData?.start_date} ~ ${props.responseData?.end_date}`}</div>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="card">
                <div className="title">원금</div>
                <div className="content">{`${utils.intComma(seed)}원`}</div>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="card">
                <div className="title">총자산</div>
                <div className="content">{`${utils.intComma(
                  totalAssets
                )}원`}</div>
                <div className="sub-content">{`(현금: ${utils.intComma(
                  totalMoney
                )}원 / 코인: ${utils.intComma(totalCoin.toFixed(3))})`}</div>
                <div
                  className={classNames("sub-content", [
                    totalAssetsRate < 0 ? "blue" : "red"
                  ])}
                >{`(수익률 ${utils.intComma(
                  totalAssetsRate.toFixed(1)
                )}%)`}</div>
              </div>
            </Col>
            <Col xs="12" md="6">
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
        </Col>
        <Col xs="12" md="6">
          <ResultProductChart
            responseData={props.responseData}
            totalAssets={totalAssets}
            totalMoney={totalMoney}
          />
        </Col>
      </Row>

      <ResultMonthlyChart responseData={props.responseData} />

      <ResultAvatarChart responseData={props.responseData} />

      <ResultAvatarTable responseData={props.responseData} />

      <ResultTradeChart responseData={props.responseData} />
    </div>
  );
};

export { Result };
