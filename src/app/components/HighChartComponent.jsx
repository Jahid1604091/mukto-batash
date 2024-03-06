import React, { useRef, useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const HighChartComponent = ({ seriesData }) => {
  const chartComponent = useRef(null); // reference to chart obj
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "area",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      scrollablePlotArea: {
        minWidth: 600,
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: '{value:%I %p}',
      },
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    legend: {
      enabled: false,
    },
    colors: ["#50B432", "#ffb455", "#FF0000"],
    plotOptions: {
        area: {
            pointStart: 0,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },

    series: [
      {
        // name: 'Brands',
        colorByPoint: true,
        data: [],
      },
    ],
    accessibility: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 400,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },
  });
  const [chartConfig, setChartConfig] = useState(chartOptions);

  useEffect(() => {
    setChartConfig({
      ...chartConfig,
      series: [{ data: seriesData }],
    });
  }, [seriesData]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartConfig}
      containerProps={{ style: { height: 100 } }}
      allowChartUpdate={true}
      ref={chartComponent}
    />
  );
};

export default HighChartComponent;
