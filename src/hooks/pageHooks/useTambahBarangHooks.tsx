import { getCategories } from "@/api/category";
import { useEffect, useState } from "react";

export const useTambahBarangHooks = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleGetCategory = async () => {
    const response = await getCategories();

    if (response.status === 200) {
      const data = await response.json();
      setCategories(data.data);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to fetch prediction");
    }
  };

  return { loading, categories };
};
