import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useMemo } from "react";
import { BacktestResponseData } from "./BacktestResponseData";

interface Props {
  responseData?: BacktestResponseData;
  totalAssets: number;
  totalMoney: number;
}

const ResultProductChart = (props: Props) => {
  const chartOptions = useMemo(() => {
    return {
      chart: {
        type: "pie",
        height: "200px"
      },
      credits: { enabled: false },
      title: {
        text: ""
      },
      tooltip: {
        enabled: false
      },
      accessibility: {
        point: {
          valueSuffix: "%"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %"
          }
        }
      },
      series: [
        {
          name: "비율",
          data: [
            {
              name: "현금",
              y: (props.totalMoney / props.totalAssets) * 100
            },
            {
              name: "코인",
              y:
                ((props.totalAssets - props.totalMoney) / props.totalAssets) *
                100
            }
          ],
          enableMouseTracking: false
        }
      ]
    };
  }, [props]);

  return (
    <div className="card">
      <div className="title mb-2">상품 비율</div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export { ResultProductChart };
