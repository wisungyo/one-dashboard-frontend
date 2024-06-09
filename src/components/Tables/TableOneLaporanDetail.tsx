import { BRAND } from "@/types/brand";
import Image from "next/image";

export type TypeChartOne = {
  title?: string;
  data: any[];
};

const TableOneLaporanDetail = ({ title = "", data = [] }: TypeChartOne) => {
  return (
    <div className="rounded-sm border border-stroke bg-white pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
      <h4 className="mb-6 px-5 text-xl font-semibold text-black dark:text-white sm:px-7.5">
        {title}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-[1fr_1fr_1fr] rounded-sm border-y border-stroke dark:border-strokedark sm:grid-cols-[1fr_1fr_1fr_1fr_1fr]">
          <div className="flex justify-center  p-2.5 xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Nama Produk</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Kategori</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Harga</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Kuantitas</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Total</h5>
          </div>
        </div>

        {data.length > 0 ? (
          data.map((data, key) => (
            <div
              className={`grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] ${
                key === data.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center justify-center gap-3 p-2.5 sm:justify-self-start xl:p-5">
                <div className="flex-shrink-0">
                  <Image
                    src={
                      data.product?.image?.url || "/images/product/product.png"
                    }
                    alt="Brand"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {data.product?.name}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-center text-black dark:text-white">
                  {data.product?.category?.name}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  Rp{" "}
                  {Math.floor(data.product?.price)
                    .toLocaleString()
                    .replace(/,/g, ".")}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-center text-black dark:text-white">
                  {data.quantity}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  Rp{" "}
                  {Math.floor(data.quantity * data.product?.price)
                    .toLocaleString()
                    .replace(/,/g, ".")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-40 flex-col items-center justify-center p-4">
            <span>Data kosong.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOneLaporanDetail;
