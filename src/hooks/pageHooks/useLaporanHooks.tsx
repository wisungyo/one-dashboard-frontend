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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [product_id, setProduct_id] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    // Calculate the date 30 days ago
    const startDateObj = new Date(currentDate);
    startDateObj.setDate(currentDate.getDate() - 30);
    const startDate = `${startDateObj.getFullYear()}-${(startDateObj.getMonth() + 1).toString().padStart(2, "0")}-${startDateObj.getDate().toString().padStart(2, "0")}`;

    // Calculate today's date
    const endDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    setStartDate(startDate);
    setEndDate(endDate);
  }, []);

  useEffect(() => {
    handleGetTransaction();
  }, [page, startDate, endDate]);

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
      start_date: startDate,
      end_date: endDate,
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

  const handleStartDate = (date: string) => {
    setLoading(true);
    setStartDate(date);
  };

  const handleEndDate = (date: string) => {
    setLoading(true);
    setEndDate(date);
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
    endDate,
    totalPage,
    startDate,
    product_id,
    total_item,
    category_id,
    transaction,
    total_price,
    customer_name,
    handleEndDate,
    total_quantity,
    customer_phone,
    handleNextPage,
    handlePrevPage,
    handleStartDate,
    totalTransaction,
    customer_address,
    handleGetDetailTransaction,
  };
};
