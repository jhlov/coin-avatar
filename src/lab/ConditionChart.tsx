import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighChartsStock from "highcharts/modules/stock";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { getCoinPriceList } from "./coinPriceData";
import "./Condition.scss";

HighChartsStock(Highcharts);

interface Props {
  market: string;
  onChangeStartDate: (date: string) => void;
  onChangeEndDate: (date: string) => void;
}

const ConditionChart = (props: Props) => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    setInit(true);
  }, []);

  const chartOptions = useMemo(() => {
    return {
      lang: { thousandsSep: "," },
      credits: { enabled: false },
      time: {
        timezone: "Asia/Seoul"
      },
      chart: {
        height: "300px"
      },
      rangeSelector: {
        selected: init ? undefined : 4,
        inputDateFormat: "%Y-%m-%d",
        inputEnabled: true
      },
      title: {
        text: props.market
      },
      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%Y-%m-%d",
          week: "%Y-%m-%d",
          month: "%Y-%m-%d",
          year: "%Y-%m-%d"
        },
        events: {
          afterSetExtremes: (e: any) => {
            props.onChangeStartDate(
              moment(e.min - 1000 * 60 * 60 * 9).format("YYYY-MM-DD")
            );
            props.onChangeEndDate(
              moment(e.max - 1000 * 60 * 60 * 9).format("YYYY-MM-DD")
            );
          }
        }
      },
      yAxis: {
        min: 0
      },
      series: [
        {
          name: props.market,
          data: getCoinPriceList(props.market),
          tooltip: {
            valueDecimals: 0,
            dateTimeLabelFormats: {
              day: "%Y-%m-%d",
              week: "%Y-%m-%d",
              month: "%Y-%m-%d",
              year: "%Y-%m-%d"
            }
          }
        }
      ]
    };
  }, [init, props]);

  return (
    <div className="card mb-3">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={chartOptions}
      />
    </div>
  );
};

export { ConditionChart };
