import { getTransactionDetail } from "@/api/transaction";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const useLaporanDetailHooks = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (id) {
      handleGetDetailTransaction(id);
    }
  }, [id]);

  const handleGetDetailTransaction = async (id: string) => {
    const response = await getTransactionDetail(id);

    if (response.status === 200) {
      const data = await response.json();
      setProducts(data.data.items);
      setTotal(data.data.total_price);
      setNote(data.data.note);
      setLoading(false);
      console.log(data);
    } else {
      setLoading(false);
      console.error("Failed to fetch transaction detail");
    }
  };

  return {
    note,
    total,
    loading,
    products,
  };
};
