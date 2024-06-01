import { createTransaction } from "@/api/transaction";
import { useEffect, useState } from "react";

export const usePenjualanHooks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);
  const [totalBuy, setTotalBuy] = useState<number>(0);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const [totalProductKind, setTotalProductKind] = useState<number>(0);

  useEffect(() => {
    let totalBuy = 0;
    let totalProduct = 0;
    let totalProductKind = 0;
    products.forEach((product) => {
      if (product.quantity > 0) {
        totalBuy += product.totalBuy * product.price;
        totalProduct += product.totalBuy;
        totalProductKind += 1;
      }
    });
    setTotalBuy(totalBuy);
    setTotalProduct(totalProduct);
    setTotalProductKind(totalProductKind);
  }, [products]);

  const handleInputProduct = (data: any) => {
    const isProductExists = products.some((product) => product.id === data.id);

    if (!isProductExists) {
      const newProduct = { ...data, totalBuy: 1 };
      const newProducts = [...products, newProduct];
      setProducts(newProducts);
    }
  };

  const handleRemoveProduct = (index: number) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleDecreaseProduct = (id: string) => {
    const newProducts = products.map((product, i) => {
      if (product.id === id) {
        if (product.totalBuy > 1) {
          product.totalBuy -= 1;
        }
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleIncreaseProduct = (id: string) => {
    const newProducts = products.map((product, i) => {
      if (product.id === id) {
        if (product.totalBuy < product.quantity) {
          product.totalBuy += 1;
        }
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleSubmitTransaction = async () => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const transactionData = {
      customer_name: user.name || "",
      customer_phone: user?.phone_number || "",
      customer_address: user?.email || "",
      note: note,
      items: products
        .filter((product) => product.quantity > 0)
        .map((product) => ({
          product_id: product.id,
          quantity: product.totalBuy,
          note: note,
        })),
    };

    const response = await createTransaction(transactionData);
    console.log(response);

    if (response.status === 201) {
      setIsModalOpen(true);
      setNote("");
      setProducts([]);
      setTotalBuy(0);
      setTotalProduct(0);
      setTotalProductKind(0);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to create transaction");
    }
  };

  return {
    note,
    loading,
    products,
    totalBuy,
    isModalOpen,
    totalProduct,
    totalProductKind,
    setNote,
    setProducts,
    setIsModalOpen,
    handleInputProduct,
    handleRemoveProduct,
    handleIncreaseProduct,
    handleDecreaseProduct,
    handleSubmitTransaction,
  };
};
