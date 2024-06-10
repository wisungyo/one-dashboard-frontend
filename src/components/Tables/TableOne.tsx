import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/product/product-01.png",
    name: "Produk 1",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/product/product-02.png",
    name: "Produk 2",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/product/product-02.png",
    name: "Produk 3",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/product/product-02.png",
    name: "Produk 4",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/product/product-02.png",
    name: "Produk 5",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

export type TypeChartOne = {
  title: string;
  data: any[];
};

const TableOne = ({ title, data = [] }: TypeChartOne) => {
  return (
    <div className="rounded-sm border border-stroke bg-white pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
      <h4 className="mb-6 px-5 text-xl font-semibold text-black dark:text-white sm:px-7.5">
        {title}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-[1fr_1fr_1fr] rounded-sm border-y border-stroke dark:border-strokedark sm:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div className="flex justify-center  p-2.5 xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Nama Produk</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Kategori</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Harga</h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Terjual</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Total</h5>
          </div>
        </div>

        {data.length > 0 ? (
          data.map((data, key) => (
            <div
              className={`grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] ${
                key === brandData.length - 1
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
                  {data.product.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-center text-black dark:text-white">
                  {data.product?.category?.description}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-center text-black dark:text-white">
                  Rp{" "}
                  {Math.floor(data.product?.price)
                    .toLocaleString()
                    .replace(/,/g, ".")}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-center text-black dark:text-white">
                  {Math.floor(data.total_sold)
                    .toLocaleString()
                    .replace(/,/g, ".")}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-center text-meta-3">
                  Rp{" "}
                  {Math.floor(data.total_price)
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

export default TableOne;
