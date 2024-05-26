"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import ChartThree from "../Charts/ChartThree";
import DatePickerOne from "../FormElements/DatePicker/DatePickerOne";
import { useDashboardHooks } from "@/hooks/pageHooks/useDashboardHooks";

const ECommerce: React.FC = () => {
  useAuth();

  const { sales, salesDates, products, categories } = useDashboardHooks();

  return (
    <>
      <div className="mt-2 grid grid-cols-12 gap-4 md:mt-1 md:gap-6 2xl:mt-1 2xl:gap-7.5">
        <div className="col-span-12 flex gap-5.5 md:col-span-6">
          <DatePickerOne
            label="Tanggal awal"
            value={new Date("2024-01-01").toLocaleDateString("en-ID", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          />
          <DatePickerOne
            label="Tanggal akhir"
            value={new Date("2024-05-31").toLocaleDateString("en-ID", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          />
        </div>
        <ChartTwo ydata={sales} xdata={salesDates} title="Analisis Penjualan" />
        <div className="col-span-12 xl:col-span-7">
          <TableOne data={products} title="Produk Terbaik" />
        </div>
        <ChartThree data={categories} />
      </div>
    </>
  );
};

export default ECommerce;
