"use client";
import { useLaporanHooks } from "@/hooks/pageHooks/useLaporanHooks";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOnePenjualan from "@/components/Tables/TableOnePenjualan";
import { useDatangBarangHook } from "@/hooks/pageHooks/useDatangBarangHook";

const Penjualan: React.FC = () => {
  const {
    loading,
    category_id,
    code,
    name,
    description,
    price,
    quantity,
    sort,
    sort_by,
    limit,
    page,
    product,
    setLoading,
    setCategory_id,
    setCode,
    setName,
    setDescription,
    setPrice,
    setQuantity,
    setSort,
    setSort_by,
    setLimit,
    setPage,
  } = useDatangBarangHook();

  return (
    <>
      <Breadcrumb pageName="Penjualan" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 flex flex-col gap-6">
          <TableOnePenjualan data={[]} title="Transaksi Penjualan" />
          <div className="flex w-full flex-col rounded-sm border border-stroke bg-white p-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-row items-end justify-between">
              <div className="w-1/2">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Deskripsi
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Masukkan Deskripsi Barang"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
              </div>
              <div className="w-1/4 gap-2">
                <div className="text-right text-lg font-bold">
                  Detil Penjualan
                </div>
                <div className="mt-6 flex flex-row items-center justify-between gap-4">
                  <div>Jenis Barang</div>
                  <div>0</div>
                </div>
                <div className="flex flex-row items-center justify-between gap-4">
                  <div>Jumlah Barang</div>
                  <div>0</div>
                </div>
                <div className="mt-3 flex flex-row items-center justify-between gap-4 border-t-2 border-t-neutral-200 pt-3 font-semibold">
                  <div>Total Harga</div>
                  <div>Rp 0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Penjualan;
