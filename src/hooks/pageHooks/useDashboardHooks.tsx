import { ChartTwoState } from "@/components/Charts/ChartTwo";
import {
  apiMostSoldCategory,
  apiMostSoldProduct,
  apiSalesSummary,
} from "@/api/dashboard";
import { use, useEffect, useState } from "react";

export const useDashboardHooks = () => {
  const [loading, setLoading] = useState(false);
  const [sales, setSales] = useState([]);
  const [salesDates, setSalesDates] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    const lastDayOfMonth = new Date(year, month, 0);

    // const startDate = `${year}-${month.toString().padStart(2, "0")}-01`;
    const startDate = `${year}-01-01`;
    const endDate = `${year}-${month.toString().padStart(2, "0")}-${lastDayOfMonth.getDate()}`;

    setStartDate(startDate);
    setEndDate(endDate);
  }, []);

  useEffect(() => {
    if (startDate || endDate) {
      handleGetSalesSummary();
      handleGetMostSoldProduct();
      handleGetMostSoldCategory();
    }
  }, [startDate, endDate]);

  const handleGetSalesSummary = async () => {
    const response = await apiSalesSummary(startDate, endDate);
    const data = await response.json();
    const sales = data.data.map((item: any) => item.total_quantity);
    const salesDates = data.data.map((item: any) => item.date);
    setSales(sales);
    setSalesDates(salesDates);
    console.log(sales, salesDates);
  };

  const handleGetMostSoldProduct = async () => {
    const response = await apiMostSoldProduct(startDate, endDate);
    const data = await response.json();
    setProducts(data.data);
  };

  const handleGetMostSoldCategory = async () => {
    const response = await apiMostSoldCategory(startDate, endDate);
    const data = await response.json();
    setCategories(data.data.items);
  };

  return { sales, salesDates, products, categories, handleGetSalesSummary };
};
