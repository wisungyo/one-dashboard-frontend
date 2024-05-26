"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import ChartThree from "@/components/Charts/ChartThree";
import React from "react";
import useAuth from "@/hooks/useAuth";

const Chart: React.FC = () => {
  useAuth();

  return (
    <>
      <Breadcrumb pageName="Data Barang" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
