import { getPredictions } from "@/api/prediction";
import { use, useEffect, useState } from "react";

export const usePrediksiHooks = () => {
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    handleGetPrediction();
  }, []);

  const handleGetPrediction = async () => {
    setLoading(true);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;

    const params = {
      year: currentYear.toString(),
      month: nextMonth.toString(),
    };

    const response = await getPredictions(params);

    if (response.status === 200) {
      const data = await response.json();
      setPrediction(data.data.products_summary);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to fetch prediction");
    }
  };

  return { loading, year, month, prediction, handleGetPrediction };
};
