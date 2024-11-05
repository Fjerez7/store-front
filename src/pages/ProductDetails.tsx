import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Product } from "../types/Products";
import { Button } from "primereact/button";
import { LayoutPage } from "../components/LayoutPage/LayoutPage";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { Cart } from "../components/Cart/Cart";

const fetchProduct = async (id: number) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  if (!response.ok) throw new Error("Error, no hay productos");
  return response.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  }) as { data: Product; isLoading: boolean };

  const { addToCart } = useCart();
  const [openCart, setOpenCart] = useState(false);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-5xl">
        Loading...
      </div>
    );

  return (
    <LayoutPage>
      <div className="flex gap-10">
        <img className="" src={data?.images[1]} alt={data?.title} />
        <div>
          <h1 className="text-4xl">{data?.title}</h1>
          <p className="text-2xl">Price: ${data?.price}</p>
          <Button
            label="Add to cart"
            className="bg-[#ffcc03] w-full p-[10px] mt-[50px]"
            onClick={() => {
              setOpenCart(true);
              addToCart(data);
            }}
          />
          {openCart && <Cart visible={openCart} onHide={setOpenCart} />}
        </div>
      </div>
    </LayoutPage>
  );
};

export default ProductDetails;
