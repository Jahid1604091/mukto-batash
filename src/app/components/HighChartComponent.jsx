import React, { useRef, useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const HighChartComponent = ({ seriesData }) => {
  const chartComponent = useRef(null); // reference to chart obj
  const dates = seriesData?.map(d=>d[0])
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "area",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      scrollablePlotArea: {
        minWidth: 600,
      },
      backgroundColor: 'none',
    },
    xAxis: {
      type: "date",
      categories: dates,
      labels: {
        // format: '{value:%Y %m %d}',
        // format: '{value:%I %p}',
        style:{
          color: '#f0f0f0',
        }
      
      },
      gridLineWidth: 0,
      lineColor: '#000',
      // tickColor: '#000',
      // labels: {
      //    style: {
      //       color: '#f0f0f0',
      //       font: '11px Trebuchet MS, Verdana, sans-serif'
      //    }
      // },
    },
    yAxis: {
      title: {
        text: "",
      },
      labels:{
        style:{
          color: '#f0f0f0',
        }
      },
      gridLineWidth: 0,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },

    legend: {
      enabled: false,
    },
    colors: ["#50B432", "#ffb455", "#FF0000"],
    plotOptions: {
        area: {
          pointStart: 0,
          fillColor: '#B78C08',
          lineColor:"#574203",
         lineWidth:1
            // marker: {
            //     enabled: false,
            //     symbol: 'circle',
            //     radius: 2,
            //     states: {
            //         hover: {
            //             enabled: true
            //         }
            //     }
            // }
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
    tooltip:{
      pointFormat: 'Low: {point.y}'

    }
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
