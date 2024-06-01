"use client";
import { useLaporanHooks } from "@/hooks/pageHooks/useLaporanHooks";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loader2 from "@/components/common/Loader2";
import React from "react";
import { useLaporanDetailHooks } from "@/hooks/pageHooks/useLaporanDetailHooks";
import TableOneLaporan from "@/components/Tables/TableOneLaporan";
import TableOneLaporanDetail from "@/components/Tables/TableOneLaporanDetail";

const LaporanDetail: React.FC = () => {
  const { note, total, loading, products } = useLaporanDetailHooks();

  if (loading) {
    return <Loader2 />;
  }

  return (
    <>
      <Breadcrumb pageName="Detail Laporan" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <TableOneLaporanDetail data={products} />
        </div>
      </div>
    </>
  );
};

export default LaporanDetail;
