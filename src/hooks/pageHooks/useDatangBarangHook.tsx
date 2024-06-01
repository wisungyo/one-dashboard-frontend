import { deleteProduct, getProduct } from "@/api/product";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useDatangBarangHook = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [category_id, setCategory_id] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sort, setSort] = useState(1);
  const [sort_by, setSort_by] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const [id, setId] = useState("");

  useEffect(() => {
    handleGetProduct();
  }, [page]);

  const handleGetProduct = async () => {
    const params = {
      category_id: category_id,
      code: code,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      sort: sort,
      sort_by: sort_by,
      limit: limit,
      page: page,
    };

    const response = await getProduct(params);

    if (response.status === 200) {
      const data = await response.json();
      setProduct(data.data);
      setTotalPage(data.pagination.total_page);
      setTotalProduct(data.pagination.total);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to fetch product");
    }
  };

  const handleSearch = () => {
    console.log(name);
    setPage(1);
    handleGetProduct();
  };

  const handleDeleteProduct = async () => {
    setLoading(true);
    const response = await deleteProduct(id);
    if (response.status === 200) {
      handleGetProduct();
    } else {
      setLoading(false);
      console.error("Failed to delete product");
    }
  };

  const handleUpdateProduct = async (id: string) => {
    router.push("/data-barang/" + id);
  };

  const handleNextPage = () => {
    if (page === totalPage) return;
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const handleToggleModal = (id: string) => {
    setId(id);
    setIsModalOpen((prev) => !prev);
  };

  return {
    code,
    name,
    sort,
    page,
    limit,
    price,
    product,
    sort_by,
    loading,
    quantity,
    totalPage,
    category_id,
    description,
    isModalOpen,
    totalProduct,
    setPage,
    setCode,
    setName,
    setSort,
    setPrice,
    setLimit,
    setSort_by,
    setLoading,
    setQuantity,
    handleSearch,
    setDescription,
    setCategory_id,
    handleNextPage,
    handlePrevPage,
    handleToggleModal,
    handleDeleteProduct,
    handleUpdateProduct,
  };
};
