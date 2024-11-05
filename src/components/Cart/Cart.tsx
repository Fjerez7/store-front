import { Sidebar } from "primereact/sidebar";
import { Dispatch, FC } from "react";
import { useCart } from "../../hooks/useCart";
import { CartProduct } from "../CartProduct/CartProduct";
import { Product } from "../../types/Products";

interface CartProps {
  visible: boolean;
  onHide: Dispatch<boolean>;
}

export const Cart: FC<CartProps> = ({ visible, onHide }) => {
  const { cartItems, totalAmount } = useCart();

  return (
    <Sidebar visible={visible} onHide={() => onHide(false)} position="right">
      <h1 className="text-3xl mb-[50px]">Your cart</h1>
      {cartItems &&
        cartItems.map((item: Product, i) => {
          return (
            <CartProduct
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.images[1]}
            />
          );
        })}
      <span className="flex mt-5 justify-between text-2xl">
        <h2>TOTAL:</h2>
        <h2>${totalAmount}</h2>
      </span>
    </Sidebar>
  );
};
