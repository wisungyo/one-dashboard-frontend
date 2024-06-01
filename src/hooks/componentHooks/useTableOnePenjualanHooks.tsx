import { getProduct } from "@/api/product";
import { useEffect, useRef, useState } from "react";

export const useTableOnePenjualanHooks = () => {
  const timeoutId = useRef<any>(null);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  useEffect(() => {
    if (search) {
      handleSearchProduct();
      setIsShowDropdown(true);
    } else {
      setProducts([]);
      setIsShowDropdown(false);
    }
  }, [search]);

  const showDropdown = () => {
    setIsShowDropdown(true);
  };

  const hideDropdown = () => {
    setIsShowDropdown(false);
  };

  const handleSelectProduct = (data: any) => {
    setSelectedProduct(data);
    setSearch(data.name);
    hideDropdown();
  };

  const handleInputProduct = () => {
    setIsShowDropdown(false);
  };

  const handleRemoveProduct = (index: number) => {
    let newProducts: any = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleSearchProduct = async () => {
    setLoading(true);
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(async () => {
      const response = await getProduct({ name: search });
      if (response.status === 200) {
        const data = await response.json();
        setProducts(data.data);
        console.log(data.data);
        setLoading(false);
      } else {
        setProducts([]);
        setLoading(false);
      }
    }, 800);
  };

  return {
    search,
    loading,
    products,
    isShowDropdown,
    selectedProduct,
    setSearch,
    showDropdown,
    hideDropdown,
    handleInputProduct,
    handleRemoveProduct,
    handleSelectProduct,
    handleSearchProduct,
  };
};
