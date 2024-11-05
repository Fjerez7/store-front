import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!response.ok) throw new Error("Error, jo hay productos");
  return response.json();
};

const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};

export default useProducts;
