import Grid from "@toast-ui/react-grid";
import _ from "lodash";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { TierTableData } from "./../types/TierTableData";
import "./Condition.scss";
import { ConditionChart } from "./ConditionChart";
import { ConditionTable } from "./ConditionTable";

interface Props {
  onClickTestStart: (
    market: string,
    seed: number,
    strategy: string,
    tierTable: TierTableData[],
    startDate: string,
    endDate: string
  ) => void;
}

const Condition = (props: Props) => {
  const [market, setMarket] = useState<string>("BTC");
  const [seed, setSeed] = useState<number>(10000000);
  const [strategy, setStrategy] = useState("7tier");
  const [startDate, setStartDate] = useState("2020-12-31");
  const [endDate, setEndDate] = useState("2021-12-31");
  const [grid, setGrid] = useState<Grid | null>(null);

  const marketList = [
    ["비트코인", "BTC"],
    ["이더리움", "ETH"],
    ["리플", "XRP"]
    // ["에이다", "ADA"]
  ];

  const strategyList = [
    ["7티어", "7tier"],
    ["뉴포텐13", "new_poten_13tier"],
    ["뉴포텐17", "new_poten_17tier"],
    ["뉴포텐20", "new_poten_20tier"],
    ["삭제포텐20", "del_poten_20tier"],
    ["삭제포텐26", "del_poten_26tier"],
    ["커스텀", "custom"]
  ];

  const onClickTestStart = () => {
    if (grid) {
      const err = grid.getInstance().validate();
      if (_.isEmpty(err)) {
        const tierData: TierTableData[] = grid
          .getInstance()
          .getData()
          .map((e: any) => ({
            buy: Number(e.buy_condition),
            sell: {
              type: e.sell_condition_type,
              value: Number(e.sell_condition_value)
            },
            seed: Number(e.seed_rate)
          }));

        // 시드 합 체크
        if (100 < tierData.reduce((p, c) => p + c.seed, 0)) {
          alert("시드의 합이 100을 넘을 수 없습니다.");
          return;
        }

        props.onClickTestStart(
          market,
          seed,
          strategy,
          tierData,
          startDate,
          endDate
        );
      } else {
        alert("잘못된 데이터가 있습니다.");
      }
    }
  };

  return (
    <div className="condition py-4">
      <h1>포텐님의 아바타법 코인 백테스트</h1>
      <ConditionChart
        market={market}
        onChangeStartDate={setStartDate}
        onChangeEndDate={setEndDate}
      />

      <Row>
        <Col xs="12" md="4" lg="3" className="mb-4">
          <div className="card">
            <Form.Group controlId="market">
              <Form.Label>종목</Form.Label>
              <Form.Control
                as="select"
                onChange={e => setMarket(e.target.value)}
                value={market}
              >
                {marketList.map(e => (
                  <option key={e[1]} value={e[1]}>
                    {e[0]}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="seed">
              <Form.Label>원금</Form.Label>
              <Form.Control
                type="number"
                onChange={e => setSeed(parseInt(e.target.value))}
                value={seed}
              />
            </Form.Group>

            <Form.Group controlId="strategy">
              <Form.Label>전략</Form.Label>
              <Form.Control
                as="select"
                onChange={e => setStrategy(e.target.value)}
                value={strategy}
              >
                {strategyList.map(e => (
                  <option key={e[1]} value={e[1]}>
                    {e[0]}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button onClick={onClickTestStart}>테스트 시작</Button>
          </div>
        </Col>
        <Col xs="12" md="8" lg="9" className="mb-4">
          <ConditionTable
            market={market}
            seed={seed}
            strategy={strategy}
            marketList={marketList.map(e => e[1])}
            setGrid={setGrid}
          />
        </Col>
      </Row>
    </div>
  );
};

export { Condition };
