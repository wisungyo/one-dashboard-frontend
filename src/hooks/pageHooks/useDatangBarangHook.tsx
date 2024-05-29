import { useEffect, useState } from "react";
import { getProduct } from "@/api/product";

export const useDatangBarangHook = () => {
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

  const handleNextPage = () => {
    if (page === totalPage) return;
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
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
  };
};
