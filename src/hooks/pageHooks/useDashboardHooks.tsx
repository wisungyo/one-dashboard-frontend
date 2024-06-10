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
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    // Calculate the date 30 days ago
    const startDateObj = new Date(currentDate);
    startDateObj.setDate(currentDate.getDate() - 30);
    const startDate = `${startDateObj.getFullYear()}-${(startDateObj.getMonth() + 1).toString().padStart(2, "0")}-${startDateObj.getDate().toString().padStart(2, "0")}`;

    // Calculate today's date
    const endDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

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
      const salesDates = data.data.map((item: any) =>
        convertDateFormat(item.date),
      );
      setSales(sales);
      setSalesDates(salesDates);
      setLoadingSummary(false);
    } else {
      setLoadingSummary(false);
      console.error("Failed to fetch sales summary");
    }
  };

  const convertDateFormat = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
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
    setLoadingSummary(true);
    setStartDate(date);
  };

  const handleEndDate = (date: string) => {
    setLoadingSummary(true);
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
