import { Button } from "primereact/button";
import { LayoutPage } from "../components/LayoutPage/LayoutPage";
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Cart = () => {
    const {cartItems,totalAmount} = useCart()
    return(
        <LayoutPage>
            {cartItems.length > 0 ? (
                
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col gap-3 w-[600px]">
                    <h1 className="text-3xl">Your    Cart</h1>
                        {cartItems.map((item, i) => (
                            <div key={i} className="flex gap-5 items-center border-t-4 border-t-white py-5">
                                <img src={item.product.image} alt={item.product.title} className="w-[200px] h-[100px]" />
                                <div className="flex flex-col gap-3 grow ">
                                    <h2 className="text-2xl font-bold">{item.product.title}</h2> 
                                    <span className="flex justify-between"> 
                                        <p>Quantity: {item.quantity}</p>  
                                        <p>${item.product.price * item.quantity}</p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl">Total:</h2>
                            <h2 className="text-2xl">${totalAmount}</h2>
                        </div>
                        <NavLink to={'/checkout'}>
                            <Button className='w-[350px] bg-[#ffcc03] p-[10px]' label={'Proceed to checkout'} />
                        </NavLink>
                    </div>
                </div>
               
            )
            
            : (
                <div className="flex flex-col justify-center items-center w-[350px] gap-3">
                <Button icon={'pi pi-cart-plus'} text rounded disabled pt={{
                    root: {className: 'w-[200px] h-[200px]'},
                    icon: {style: {fontSize: '125px'}}
                }} />
                <h1 className="text-3xl text-center">You shopping cart is empty</h1>
                <p>Add items to your cart</p>
                <NavLink to={'/'}>
                    <Button className='w-[350px] bg-[#ffcc03] p-[10px]' label={'Continue shopping'} />
                </NavLink>
                </div>
            )}
        </LayoutPage>
    )
}

export default Cart;