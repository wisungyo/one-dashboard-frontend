import { getTransactions } from "@/api/transaction";
import { useEffect, useState } from "react";

export const usePenjualanHooks = () => {
  const [loading, setLoading] = useState(false);
  const [category_id, setCategory_id] = useState("");
  const [code, setCode] = useState("");
  const [sort, setSort] = useState("");
  const [sort_by, setSort_by] = useState("");
  const [limit, setLimit] = useState("");
  const [page, setPage] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [type, setType] = useState("");
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

  useEffect(() => {
    handleGetTransaction();
  }, []);

  const handleGetTransaction = async () => {
    setLoading(true);

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
    const data = await response.json();

    if (response.status === 200) {
      setTransaction(data.data);
      setLoading(false);
    } else {
      console.error(data);
    }
  };

  return {};
};
