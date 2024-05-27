import { getProduct } from "@/api/product";
import { useEffect, useState } from "react";

export const useDatangBarangHook = () => {
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    setLoading(true);

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
    const data = await response.json();

    if (response.status === 200) {
      console.log(data);
      setProduct(data.data);
      setLoading(false);
    } else {
      console.error(data);
    }
  };

  return {
    loading,
    category_id,
    code,
    name,
    description,
    price,
    quantity,
    sort,
    sort_by,
    limit,
    page,
    product,
    setLoading,
    setCategory_id,
    setCode,
    setName,
    setDescription,
    setPrice,
    setQuantity,
    setSort,
    setSort_by,
    setLimit,
    setPage,
  };
};
