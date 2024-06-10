import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export type ChartTwoState = {
  series: {
    name: string;
    data: number[];
  }[];
};

type TypeChartTwo = {
  ydata: any[];
  xdata: any[];
  title: string;
};

const ChartTwo = ({ ydata = [], xdata = [], title }: TypeChartTwo) => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Penjualan",
        data: [],
      },
    ],
  });
  const [xaxis, setXaxis] = useState<string[]>([]);

  useEffect(() => {
    setState({
      series: [
        {
          name: "Penjualan",
          data: ydata.length > 0 ? ydata : [],
        },
      ],
    });
    setXaxis(xdata);
  }, [ydata, xdata]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-12">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            {title}
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
          <ReactApexChart
            options={{
              colors: ["#3C50E0", "#80CAEE"],
              chart: {
                fontFamily: "Satoshi, sans-serif",
                type: "bar",
                height: 335,
                stacked: true,
                toolbar: {
                  show: false,
                },
                zoom: {
                  enabled: false,
                },
              },

              responsive: [
                {
                  breakpoint: 1536,
                  options: {
                    plotOptions: {
                      bar: {
                        borderRadius: 0,
                        columnWidth: "25%",
                      },
                    },
                  },
                },
              ],
              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 0,
                  columnWidth: "25%",
                  borderRadiusApplication: "end",
                  borderRadiusWhenStacked: "last",
                },
              },
              dataLabels: {
                enabled: false,
              },

              xaxis: {
                categories: xaxis,
              },
              legend: {
                position: "top",
                horizontalAlign: "left",
                fontFamily: "Satoshi",
                fontWeight: 500,
                fontSize: "14px",

                markers: {
                  radius: 99,
                },
              },
              fill: {
                opacity: 1,
              },
            }}
            series={state.series}
            type="bar"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
