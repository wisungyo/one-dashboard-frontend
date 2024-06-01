import { createProduct, getProductById } from "@/api/product";
import { useEffect, useState } from "react";
import { getCategories } from "@/api/category";
import { useParams } from "next/navigation";

export const useTambahBarangHooks = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<number | null>(null);
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
      setName(data.name);
      setCode(data.code);
      setPrice(data.price);
      setQuantity(data.quantity);
      setDescription(data.description);
      setCategory(data.category_id);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to fetch product");
    }
  };

  const handleCreateProduct = async () => {
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

    const response = await createProduct(newProduct);

    if (response.status === 200) {
      setLoading(false);
      console.log("Product added successfully");
    } else {
      setLoading(false);
      console.error("Failed to add product");
    }
  };

  return {
    name,
    code,
    image,
    price,
    loading,
    category,
    quantity,
    categories,
    description,
    setName,
    setImage,
    setCode,
    setPrice,
    setQuantity,
    setCategory,
    setDescription,
    handleCreateProduct,
  };
};
