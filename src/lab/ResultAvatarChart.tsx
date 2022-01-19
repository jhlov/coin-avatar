import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import React, { useMemo } from "react";
import { BacktestResponseData } from "./BacktestResponseData";

interface Props {
  responseData?: BacktestResponseData;
}

const ResultAvatarChart = (props: Props) => {
  const startDate = moment(props.responseData?.start_date).startOf("month");
  const endDate = moment(props.responseData?.end_date).startOf("month");
  const deltaMonth =
    Math.ceil(moment.duration(endDate.diff(startDate)).asMonths()) + 1;
  console.log(deltaMonth);
  const categories = Array(props.responseData?.avatar_profit_list.length)
    .fill(0)
    .map((_, i) => i + 1);

  const chartOptions = useMemo(() => {
    return {
      chart: {
        type: "column",
        height: "200px"
      },
      lang: { thousandsSep: "," },
      credits: { enabled: false },
      time: {
        timezone: "Asia/Seoul"
      },
      title: {
        text: ""
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: categories,
        crosshair: true
      },
      yAxis: {
        title: ""
      },
      series: [
        {
          name: "실현 수익",
          data: props.responseData?.avatar_profit_list
        }
      ]
    };
  }, [props, categories]);

  return (
    <div className="card">
      <div className="title mb-2">티어별 실현 수익</div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export { ResultAvatarChart };
