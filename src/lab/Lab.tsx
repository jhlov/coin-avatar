import axios from "axios";
import React, { useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BacktestResponseData } from "./BacktestResponseData";
import { Condition } from "./Condition";
import { Result } from "./Result";
import { TierTableData } from "./tierTable";

const Lab = () => {
  const [loding, setLoding] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<BacktestResponseData | null>(
    null
  );

  const ref = useRef<HTMLDivElement>(null);

  const onClickTestStart = async (
    market: string,
    seed: number,
    strategy: string,
    tierTable: TierTableData[],
    startDate: string,
    endDate: string
  ) => {
    // console.log(JSON.stringify(tierTable));
    setLoding(true);
    setResponseData(null);

    onScrollToBottom();
    setTimeout(() => {
      onScrollToBottom();
    }, 100);

    const res = await axios.post(
      "https://e21wumxqzk.execute-api.ap-northeast-2.amazonaws.com/default/coin-avatar",
      {
        market,
        seed,
        strategy,
        tierTable,
        startDate,
        endDate
      }
    );

    if (res.status === 200) {
      setResponseData(res.data);
    }

    setLoding(false);
  };

  const onScrollToBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div ref={ref} className="mb-4">
      <Condition onClickTestStart={onClickTestStart} />

      {loding && (
        <div className="mt-5">
          <Spinner animation="border" />
        </div>
      )}

      {responseData && (
        <>
          <hr />
          <Result responseData={responseData} />
        </>
      )}
    </div>
  );
};

export { Lab };
