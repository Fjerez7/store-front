import { FC } from "react";
import { useCart } from "../../hooks/useCart";

interface CartProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const CartProduct: FC<CartProductProps> = ({
  id,
  image,
  price,
  title,
}) => {
  const { removeFromCart } = useCart();
  return (
    <div className="flex flex-row gap-5 border-b-2 py-5">
      <img src={image} className="w-[90px]" />
      <div className="flex flex-col justify-between">
        <span className="flex flex-row gap-2">
          <h3>{title}</h3>
          <i className="pi pi-times" onClick={() => removeFromCart(id)}></i>
        </span>
        <span className="flex justify-end">
          <p>${price}</p>
        </span>
      </div>
    </div>
  );
};