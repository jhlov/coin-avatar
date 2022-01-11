import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Condition.scss";
import { ConditionChart } from "./ConditionChart";
import { ConditionTable } from "./ConditionTable";
import { getTierTable, TierTableData } from "./tierTable";

interface Props {
  onClickTestStart: (
    market: string,
    seed: number,
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
    ["삭제포텐20", "del_poten_20tier"]
  ];

  const onClickTestStart = () => {
    props.onClickTestStart(
      market,
      seed,
      getTierTable(strategy),
      startDate,
      endDate
    );
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
          />
        </Col>
      </Row>
    </div>
  );
};

export { Condition };
