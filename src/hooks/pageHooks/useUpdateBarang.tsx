import { getCategories } from "@/api/category";
import {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "@/api/product";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const useUpdateBarangHooks = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<string>("");
  const [categoryLabel, setCategoryLabel] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleGetCategory();
    if (id) {
      handleGetProductById(id);
    }
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

  const handleGetProductById = async (id: string) => {
    setLoading(true);
    const response = await getProductById(id);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setName(data.data.name);
      setCode(data.data.code);
      setPrice(data.data.price);
      setQuantity(data.data.quantity);
      setDescription(data.data.description);
      setCategory(data.data.category.id);
      setCategoryLabel(data.data.category.name);
      console.log(data.data.category.name);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to fetch product");
    }
  };

  const handleUpdateProduct = async (id: string) => {
    setLoading(true);
    const newProduct = {
      name,
      code,
      price,
      image,
      quantity,
      description,
      category_id: category,
    };

    const response = await updateProduct(id, newProduct);

    if (response.status === 200) {
      setLoading(false);
      console.log("Product added successfully");
    } else {
      setLoading(false);
      console.error("Failed to add product");
    }
  };

  return {
    id,
    name,
    code,
    image,
    price,
    loading,
    category,
    quantity,
    categories,
    description,
    categoryLabel,
    setName,
    setImage,
    setCode,
    setPrice,
    setQuantity,
    setCategory,
    setDescription,
    handleUpdateProduct,
  };
};
