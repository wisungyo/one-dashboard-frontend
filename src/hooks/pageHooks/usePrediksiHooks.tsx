import { getPredictions } from "@/api/prediction";
import { use, useEffect, useState } from "react";

export const usePrediksiHooks = () => {
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [prediction, setPrediction] = useState([]);
  const [totalPrediction, setTotalPrediction] = useState(0);

  useEffect(() => {
    handleGetPrediction();
  }, [page]);

  const handleGetPrediction = async () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;

    const params = {
      year: currentYear.toString(),
      month: nextMonth.toString(),
      page: page,
      limit: limit,
    };

    const response = await getPredictions(params);

    if (response.status === 200) {
      const data = await response.json();
      setTotalPage(data.data.pagination.total_page);
      setPrediction(data.data.products_summary);
      setTotalPrediction(data.data.pagination.total);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to fetch prediction");
    }
  };

  const handleNextPage = () => {
    if (page === totalPage) return;
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return {
    year,
    page,
    month,
    limit,
    loading,
    totalPage,
    prediction,
    totalPrediction,
    handleNextPage,
    handlePrevPage,
    handleGetPrediction,
  };
};
