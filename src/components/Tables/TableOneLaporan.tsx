import { BRAND } from "@/types/brand";
import { formatDate } from "@/utils/dateFormater";
import Image from "next/image";

export type TypeChartOne = {
  title: string;
  data: any[];
  onShowDetail: (id: string) => void;
};

const TableOneLaporan = ({
  title,
  data = [],
  onShowDetail = () => {},
}: TypeChartOne) => {
  return (
    <div className="rounded-sm border border-stroke bg-white pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
      <h4 className="mb-6 px-5 text-xl font-semibold text-black dark:text-white sm:px-7.5">
        {title}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-[1fr_1fr_1fr] rounded-sm border-y border-stroke dark:border-strokedark sm:grid-cols-[1fr_1fr_1fr_1fr_1fr]">
          <div className="flex justify-center  p-2.5 xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">ID</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Tanggal</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Total Harga</h5>
          </div>
          <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base">Catatan</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium xsm:text-base"></h5>
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
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-center text-black dark:text-white">
                  {data.id}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-center text-black dark:text-white">
                  {formatDate(data.created_at)}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-center text-black dark:text-white">
                  Rp{" "}
                  {Math.floor(data.total_price)
                    .toLocaleString()
                    .replace(/,/g, ".")}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-center text-black dark:text-white">
                  {data.note || "-"}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <button
                  className="hover:text-primary"
                  onClick={() => onShowDetail(data.id)}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                      fill=""
                    />
                    <path
                      d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                      fill=""
                    />
                  </svg>
                </button>
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

export default TableOneLaporan;
