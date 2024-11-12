import { Sidebar } from "primereact/sidebar";
import { Dispatch, FC } from "react";
import { useCart } from "../../hooks/useCart";
import { CartProduct } from "../CartProduct/CartProduct";
import { CartItem } from "../../types/Cart";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

interface CartProps {
  visible: boolean;
  onHide: Dispatch<boolean>;
}

export const Cart: FC<CartProps> = ({ visible, onHide }) => {
  const { cartItems, totalAmount } = useCart();
  

  return (
    <Sidebar visible={visible} onHide={() => onHide(false)} position="right" className="w-[400px]">
      <h1 className="text-3xl mb-[50px]">Your cart</h1>
      {cartItems &&
        cartItems.map((item: CartItem, i) => {
          return (
            <CartProduct
              key={i}
              id={item.product.id}
              title={item.product.title}
              price={item.product.price}
              image={item.product.image}
              quantity={item.quantity}
            />
          );
        })}
      <span className="flex mt-5 justify-between text-2xl mb-5">
        <h2>TOTAL:</h2>
        <h2>${totalAmount}</h2>
      </span>
      <NavLink to={'/cart'}>
      <Button label="Go to Cart" className="w-full bg-[#ffcc03] p-[10px]"/>
      </NavLink>
    </Sidebar>
  );
};
