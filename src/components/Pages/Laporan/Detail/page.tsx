"use client";
import { useLaporanDetailHooks } from "@/hooks/pageHooks/useLaporanDetailHooks";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import TableOneLaporanDetail from "@/components/Tables/TableOneLaporanDetail";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loader2 from "@/components/common/Loader2";

const LaporanDetail: React.FC = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const { note, code, total, loading, products, totalQuantity } =
    useLaporanDetailHooks();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Laporan Detail",
  });

  if (loading) {
    return <Loader2 />;
  }

  return (
    <>
      <Breadcrumb pageName="Detail Laporan" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <div className="mb-4 flex items-center justify-end">
            <button
              className="flex justify-center rounded border border-stroke bg-white px-4 py-2 font-medium hover:bg-opacity-90"
              onClick={handlePrint}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M6 1H12C12.55 1 13 1.45 13 2V4H5V2C5 1.45 5.45 1 6 1ZM16 6H15V3H3V6H2C1.45 6 1 6.45 1 7V15C1 15.55 1.45 16 2 16H5V12H13V16H16C16.55 16 17 15.55 17 15V7C17 6.45 16.55 6 16 6ZM12 14H6V10H12V14Z"
                  fill="currentColor"
                />
              </svg>
              Print
            </button>
          </div>

          <div className="flex flex-col gap-4" ref={printRef}>
            <TableOneLaporanDetail title={code} data={products} />
            <div className="flex w-full flex-col rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex flex-row justify-between">
                <div className="w-1/2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Catatan
                    </label>
                    <div className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                      {note}
                    </div>
                  </div>
                </div>
                <div className="w-1/4 gap-2">
                  <div className="text-right text-lg font-bold">
                    Detil Penjualan
                  </div>
                  <div className="mt-6 flex flex-row items-center justify-between gap-4">
                    <div>Jenis Barang</div>
                    <div>{products?.length}</div>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-4">
                    <div>Jumlah Barang</div>
                    <div>{totalQuantity}</div>
                  </div>
                  <div className="mt-4 flex flex-row items-center justify-between gap-4 border-t-2 border-t-neutral-200 pt-3 text-xl font-semibold">
                    <div>Total Harga</div>
                    <div>
                      Rp {Math.floor(total).toLocaleString().replace(/,/g, ".")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaporanDetail;
