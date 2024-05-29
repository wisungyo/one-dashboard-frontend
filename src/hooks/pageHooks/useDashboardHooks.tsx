import {
  apiMostSoldCategory,
  apiMostSoldProduct,
  apiSalesSummary,
} from "@/api/dashboard";
import { useEffect, useState } from "react";

export const useDashboardHooks = () => {
  const [loadingSummary, setLoadingSummary] = useState(true);
  const [loadingSoldProduct, setLoadingSoldProduct] = useState(true);
  const [loadingSoldCategory, setLoadingSoldCategory] = useState(true);
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
    const day = currentDate.getDate();
    const lastDayOfMonth = new Date(year, month, 0);
    const startDate = `${year}-01-01`;
    const endDate = `${year}-${month.toString().padStart(2, "0")}-${day}`;
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

    if (response.status === 200) {
      const data = await response.json();
      const sales = data.data.map((item: any) => item.total_quantity);
      const salesDates = data.data.map((item: any) => item.date);
      setSales(sales);
      setSalesDates(salesDates);
      setLoadingSummary(false);
    } else {
      setLoadingSummary(false);
      console.error("Failed to fetch sales summary");
    }
  };

  const handleGetMostSoldProduct = async () => {
    const response = await apiMostSoldProduct(startDate, endDate);

    if (response.status === 200) {
      const data = await response.json();
      setProducts(data.data);
      setLoadingSoldProduct(false);
    } else {
      setLoadingSoldProduct(false);
      console.error("Failed to fetch most sold product");
    }
  };

  const handleGetMostSoldCategory = async () => {
    const response = await apiMostSoldCategory(startDate, endDate);

    if (response.status === 200) {
      const data = await response.json();
      setCategories(data.data.items);
      setLoadingSoldCategory(false);
    } else {
      setLoadingSoldCategory(false);
      console.error("Failed to fetch most sold category");
    }
  };

  const handleStartDate = (date: string) => {
    setStartDate(date);
  };

  const handleEndDate = (date: string) => {
    setEndDate(date);
  };

  return {
    sales,
    endDate,
    products,
    startDate,
    salesDates,
    categories,
    loadingSummary,
    loadingSoldProduct,
    loadingSoldCategory,
    handleEndDate,
    handleStartDate,
    handleGetSalesSummary,
  };
};
