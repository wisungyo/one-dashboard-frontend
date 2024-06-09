import { getTransactionDetail, getTransactions } from "@/api/transaction";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useLaporanHooks = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [category_id, setCategory_id] = useState("");
  const [code, setCode] = useState("");
  const [sort, setSort] = useState("");
  const [sort_by, setSort_by] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [transaction, setTransaction] = useState([]);
  const [type, setType] = useState("OUT");
  const [total_item, setTotal_item] = useState("");
  const [total_quantity, setTotal_quantity] = useState("");
  const [total_price, setTotal_price] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [customer_phone, setCustomer_phone] = useState("");
  const [customer_address, setCustomer_address] = useState("");
  const [note, setNote] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [product_id, setProduct_id] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);

  useEffect(() => {
    handleGetTransaction();
  }, [page]);

  const handleGetTransaction = async () => {
    const params = {
      category_id: category_id,
      product_id: product_id,
      code: code,
      type: type,
      total_item: total_item,
      total_quantity: total_quantity,
      total_price: total_price,
      customer_name: customer_name,
      customer_phone: customer_phone,
      customer_address: customer_address,
      note: note,
      start_date: start_date,
      end_date: end_date,
      sort: sort,
      sort_by: sort_by,
      limit: limit,
      page: page,
    };

    const response = await getTransactions(params);

    if (response.status === 200) {
      const data = await response.json();
      setTransaction(data.data);
      setTotalPage(data.pagination.total_page);
      setTotalTransaction(data.pagination.total);
      setLoading(false);
    } else {
      setLoading(false);
      console.error("Failed to fetch transaction");
    }
  };

  const handleGetDetailTransaction = async (id: string) => {
    router.push(`/laporan/${id}`);
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
    sort,
    page,
    type,
    note,
    limit,
    sort_by,
    loading,
    end_date,
    totalPage,
    start_date,
    product_id,
    total_item,
    category_id,
    transaction,
    total_price,
    customer_name,
    total_quantity,
    customer_phone,
    totalTransaction,
    customer_address,
    handleNextPage,
    handlePrevPage,
    handleGetDetailTransaction,
  };
};
