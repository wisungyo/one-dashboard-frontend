import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "@/api/category";
import { useEffect, useState } from "react";

type Action = "create" | "update" | "delete" | "";

export const useKategoriHooks = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [message, setMessage] = useState("");
  const [action, setAction] = useState<Action>("");

  // state for update & create category
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleGetCategories = async () => {
    try {
      const response = await getCategories();

      if (response.status === 200) {
        const data = await response.json();
        setCategories(data.data);
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Failed to fetch transaction detail");
      }
      handleHideModal();
    } catch (error) {
      handleHideModal();
      setLoading(false);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      setLoading(true);
      const response = await deleteCategory(productId);

      if (response.status === 200) {
        handleGetCategories();
      } else {
        setLoading(false);
        console.error("Failed to delete category");
      }
      handleHideModal();
      setProductId("");
    } catch (error) {
      setLoading(false);
      handleHideModal();
      console.error("Failed to delete category");
    }
  };

  const handleCreateCategory = async () => {
    try {
      setLoading(true);
      const response = await createCategory(name, description);

      if (response.status === 201) {
        setAction("");
        setMessage("Kategori berhasil ditambahkan");
        handleShowModal();
        handleGetCategories();
      } else {
        setLoading(false);
        console.error("Failed to create category");
      }
      handleHideModal();
    } catch (error) {
      setLoading(false);
      handleHideModal();
      console.error("Failed to create category");
    }
  };

  const handleUpdateCategory = async () => {
    try {
      setLoading(true);
      const response = await updateCategory(productId, name, description);

      if (response.status === 200) {
        handleGetCategories();
      } else {
        setLoading(false);
        console.error("Failed to update category");
      }
      handleHideModal();
      setIsUpdate(false);
      setProductId("");
    } catch (error) {
      setLoading(false);
      handleHideModal();
      console.error("Failed to update category");
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleSetUpdate = (data: any) => {
    setIsUpdate(true);
    setProductId(data.id);
    setName(data.name);
    setDescription(data.description);
  };

  const handleCancel = () => {
    setIsUpdate(false);
    setAction("");
    setProductId("");
    setName("");
    setDescription("");
  };

  const handlePrepareCreation = () => {
    setIsUpdate(false);
    setAction("create");
    setName("");
    setDescription("");
  };

  return {
    name,
    loading,
    setName,
    isUpdate,
    productId,
    showModal,
    action,
    setAction,
    message,
    setMessage,
    categories,
    description,
    setProductId,
    setDescription,
    handlePrepareCreation,
    handleCreateCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    handleShowModal,
    handleHideModal,
    handleSetUpdate,
    handleCancel,
  };
};
