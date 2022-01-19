import React, { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BacktestResponseData } from "./BacktestResponseData";
import moment from "moment";

interface Props {
  responseData?: BacktestResponseData;
}

const ResultMonthlyChart = (props: Props) => {
  const startDate = moment(props.responseData?.start_date).startOf("month");
  const endDate = moment(props.responseData?.end_date).startOf("month");
  const deltaMonth =
    Math.ceil(moment.duration(endDate.diff(startDate)).asMonths()) + 1;
  console.log(deltaMonth);
  const categories = Array(deltaMonth)
    .fill(0)
    .map((_, i) => {
      const tempDate = startDate.clone();
      return tempDate.add(i, "month").format("YYYY/MM");
    });

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
          data: categories.map(category =>
            props.responseData?.trade_list
              .filter(
                trade =>
                  trade.type === "sell" &&
                  trade.datetime.startsWith(category.replace("/", "-"))
              )
              .reduce((p, c) => p + (c.profit ?? 0), 0)
          )
        }
      ]
    };
  }, [props, categories]);

  return (
    <div className="card">
      <div className="title mb-2">월별 실현 수익</div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export { ResultMonthlyChart };
