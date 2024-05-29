"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import ChartThree from "../Charts/ChartThree";
import DatePickerOne from "../FormElements/DatePicker/DatePickerOne";
import { useDashboardHooks } from "@/hooks/pageHooks/useDashboardHooks";
import Loader from "../common/Loader";
import Loader2 from "../common/Loader2";

const ECommerce: React.FC = () => {
  useAuth();

  const {
    sales,
    products,
    endDate,
    salesDates,
    startDate,
    categories,
    loadingSummary,
    loadingSoldProduct,
    loadingSoldCategory,
    handleEndDate,
    handleStartDate,
    handleGetSalesSummary,
  } = useDashboardHooks();

  if (loadingSummary || loadingSoldProduct || loadingSoldCategory) {
    return <Loader2 />;
  }

  return (
    <>
      <div className="mt-2 grid grid-cols-12 gap-4 md:mt-1 md:gap-6 2xl:mt-1 2xl:gap-7.5">
        <div className="col-span-12 flex gap-5.5 md:col-span-6">
          <DatePickerOne
            uniqueId="start-date"
            label="Tanggal awal"
            value={new Date(startDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            onChange={handleStartDate}
          />
          <DatePickerOne
            uniqueId="end-date"
            label="Tanggal akhir"
            value={new Date(endDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            onChange={handleEndDate}
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
