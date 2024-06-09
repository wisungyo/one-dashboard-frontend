import { createProduct, getProductById } from "@/api/product";
import { useEffect, useState } from "react";
import { getCategories } from "@/api/category";
import { useParams } from "next/navigation";

export const useTambahBarangHooks = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<string>("-1");
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
      setName(data.name);
      setCode(data.code);
      setPrice(data.price);
      setQuantity(data.quantity);
      setDescription(data.description);
      setCategory(data.category_id);
      setLoading(false);
    } else {
      setLoading(false);
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

    if (
      !name ||
      !code ||
      !price ||
      !quantity ||
      !description ||
      !category ||
      !image
    ) {
      setLoading(false);
      setModalMessage("Pastikan semua data terisi!");
      showModal();
      return;
    }

    const response = await createProduct(newProduct);

    if (response.status === 201) {
      setLoading(false);
      clearForm();
      setModalMessage("Barang berhasil ditambahkan!");
      showModal();
    } else {
      setLoading(false);
      setModalMessage(
        "Ada kesalahan saat menambahkan barang. Pastikan data terisi dengan benar dan coba lagi.",
      );
      showModal();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const clearForm = () => {
    setName("");
    setCode("");
    setPrice(0);
    setQuantity(0);
    setDescription("");
    setCategory("");
    setImage("");
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
    setName,
    setImage,
    setCode,
    setPrice,
    showModal,
    hideModal,
    setQuantity,
    setCategory,
    setDescription,
    handleSetPrice,
    setModalMessage,
    handleSetQuantity,
    handleCreateProduct,
  };
};
