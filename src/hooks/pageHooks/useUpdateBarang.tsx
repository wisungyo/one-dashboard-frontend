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
  const [image, setImage] = useState<any>("");
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
    }
  };

  const handleGetProductById = async (id: string) => {
    setLoading(true);
    const response = await getProductById(id);

    if (response.status === 200) {
      const data = await response.json();
      setName(data.data.name);
      setCode(data.data.code);
      setPrice(data.data.price);
      setQuantity(data.data.quantity);
      setDescription(data.data.description);
      setCategory(data.data.category.id);
      setCategoryLabel(data.data.category.name);
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

    if (!quantity) {
      setModalMessage("Kuantitas tidak boleh kosong!");
      showModal();
      setLoading(false);
      return;
    }

    if (!name || !code || !price || !description || !category) {
      setModalMessage("Pastikan semua data terisi!");
      showModal();
      setLoading(false);
      return;
    }

    const response = await updateProduct(id, newProduct);
    const data = await response.json();

    if (response.status === 200) {
      setLoading(false);
      setModalMessage("Barang berhasil diubah!");
      showModal();
    } else {
      if (data.message === "The code has already been taken.") {
        setModalMessage(
          "Kode barang sudah terpakai. Pastikan kode barang unik dan coba lagi.",
        );
      } else {
        setModalMessage(
          "Ada kesalahan saat menambahkan barang. Pastikan data terisi dengan benar dan coba lagi.",
        );
      }
      showModal();
      setLoading(false);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleSetPrice = (value: string) => {
    if (isNaN(Number(value))) {
      return;
    }
    setPrice(Number(value));
  };

  const handleSetQuantity = (value: string) => {
    if (isNaN(Number(value))) {
      return;
    }
    setQuantity(Number(value));
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
    isModalOpen,
    modalMessage,
    categoryLabel,
    setName,
    setCode,
    setImage,
    setPrice,
    showModal,
    hideModal,
    setQuantity,
    setCategory,
    setDescription,
    handleSetPrice,
    setModalMessage,
    handleSetQuantity,
    handleUpdateProduct,
  };
};
