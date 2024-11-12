import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw new Error("Error, no hay productos");
  return response.json();
};

const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};

export default useProducts;
