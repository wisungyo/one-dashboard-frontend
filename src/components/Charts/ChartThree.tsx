import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
  series: any[];
}

type TypeChartThree = {
  data: any;
};

const ChartThree = ({ data }: TypeChartThree) => {
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colors = data.map(() => getRandomColor());
    const categories = data.map((item: any) => item.name);
    const series = data.map((item: any) => item.percentage);
    setColors(colors);
    setSeries(series);
    setCategories(categories);
  }, [data]);

  // const handleReset = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     series: [65, 34, 12, 56],
  //   }));
  // };
  // handleReset;

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Analisis Kategori
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={{
              chart: {
                fontFamily: "Satoshi, sans-serif",
                type: "donut",
              },
              colors: categories.map(() => getRandomColor()),
              labels: categories,
              legend: {
                show: false,
                position: "bottom",
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: "65%",
                    background: "transparent",
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
              responsive: [
                {
                  breakpoint: 2600,
                  options: {
                    chart: {
                      width: 380,
                    },
                  },
                },
                {
                  breakpoint: 640,
                  options: {
                    chart: {
                      width: 200,
                    },
                  },
                },
              ],
            }}
            series={series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {data.map((category: any, index: number) => (
          <div key={index} className="w-full px-8 sm:w-1/2">
            <div className="flex w-full items-center">
              {/* <span
                  className={`mr-2 block h-3 w-full max-w-3 rounded-full`}
                ></span> */}
              <p className="flex w-full items-center justify-between gap-1 text-sm font-medium text-black dark:text-white">
                <span>{category.name}</span>
                <span>{category.percentage}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartThree;
