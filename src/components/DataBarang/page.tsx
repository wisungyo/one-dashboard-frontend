"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOneDataBarang from "../Tables/TableOneDataBarang";
import { useDatangBarangHook } from "@/hooks/pageHooks/useDatangBarangHook";

const DataBarang: React.FC = () => {
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
      <Breadcrumb pageName="Data Barang" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <TableOneDataBarang data={product} title="Produk Terbaik" />
          <div className="mt-4 flex flex-row items-center justify-between">
            <p>Menampilkan 1 - 10 dari total 29 data</p>
            <div className="flex flex-row items-center gap-2">
              <button className="flex justify-center rounded  border border-stroke bg-white px-2 py-2 font-medium hover:bg-opacity-90">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 10C14.8023 10 15.25 9.55228 15.25 9C15.25 8.44771 14.8023 8 14.25 8L14.25 10ZM3.75 9L3.04289 8.29289C2.65237 8.68342 2.65237 9.31658 3.04289 9.70711L3.75 9ZM8.29289 14.9571C8.68342 15.3476 9.31658 15.3476 9.70711 14.9571C10.0976 14.5666 10.0976 13.9334 9.70711 13.5429L8.29289 14.9571ZM9.7071 4.45711C10.0976 4.06658 10.0976 3.43342 9.7071 3.04289C9.31658 2.65237 8.68342 2.65237 8.29289 3.04289L9.7071 4.45711ZM14.25 8L3.75 8L3.75 10L14.25 10L14.25 8ZM9.70711 13.5429L4.4571 8.29289L3.04289 9.70711L8.29289 14.9571L9.70711 13.5429ZM4.4571 9.70711L9.7071 4.45711L8.29289 3.04289L3.04289 8.29289L4.4571 9.70711Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="flex justify-center rounded  border border-stroke bg-white px-2 py-2 font-medium hover:bg-opacity-90">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8C3.19772 8 2.75 8.44772 2.75 9C2.75 9.55229 3.19772 10 3.75 10V8ZM14.25 9L14.9571 9.70711C15.3476 9.31658 15.3476 8.68342 14.9571 8.29289L14.25 9ZM9.70711 3.04289C9.31658 2.65237 8.68342 2.65237 8.29289 3.04289C7.90237 3.43342 7.90237 4.06658 8.29289 4.45711L9.70711 3.04289ZM8.29289 13.5429C7.90237 13.9334 7.90237 14.5666 8.29289 14.9571C8.68342 15.3476 9.31658 15.3476 9.70711 14.9571L8.29289 13.5429ZM3.75 10H14.25V8H3.75V10ZM8.29289 4.45711L13.5429 9.70711L14.9571 8.29289L9.70711 3.04289L8.29289 4.45711ZM13.5429 8.29289L8.29289 13.5429L9.70711 14.9571L14.9571 9.70711L13.5429 8.29289Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataBarang;
