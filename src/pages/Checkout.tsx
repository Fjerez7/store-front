import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import { LayoutPage } from "../components/LayoutPage/LayoutPage";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { useCart } from "../hooks/useCart";
import { Toast } from "primereact/toast";

const Checkout = () => {
    const toast = useRef<Toast>(null);
    const {totalAmount} = useCart()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
      });
    
      const showToast = () => {
        toast.current?.show({ 
            severity: 'info', 
            summary: 'Thank you', 
            detail: 'Your order will be shipped to your address.', 
            sticky : true
        });
      }

      const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name) {
            setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault();
        const isFormComplete = Object.values(formData).every((field) => field !== '');
        if (!isFormComplete) {
            console.error('Please fill in all fields');
            return;
        }
        showToast();
      };
    return(
        <LayoutPage>
            <>
                <Toast ref={toast} position="bottom-center" onRemove={() => {
                    console.log('hola');
                    window.location.href = '/';
                }}/>
                <form onSubmit={handleSubmit} className="flex flex-row gap-10">
                    <div className="flex flex-col gap-8 w-[500px]">
                        <h1 className="text-3xl">Checkout</h1>
                        <FloatLabel>
                            <InputText 
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange} 
                                className="w-full h-[45px] px-2"/>    
                            <label htmlFor="firstName">First Name</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText id="lastName" name="lastName" value={formData.lastName}
                            onChange={handleChange} className="w-full h-[45px] px-2"/>
                            <label htmlFor="lastName">Last Name</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText id="address" name="address" value={formData.address}
                            onChange={handleChange} className="w-full h-[45px] px-2" />
                            <label htmlFor="address">Address</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText id="phone" name='phone' type="number" value={formData.phone}
                            onChange={handleChange} className="w-full h-[45px] px-2"/>
                            <label htmlFor="phone">Phone</label>
                        </FloatLabel>
                    </div> 
                    <div className="flex flex-col gap-5 mt-5">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl">Total:</h2>
                                <h2 className="text-2xl">${totalAmount}</h2>
                            </div>
                        <Button className='w-[350px] bg-[#ffcc03] p-[10px]' type="submit" label={'Proceed to checkout'} />
                    </div>
                </form>
                </>
        </LayoutPage>
    )
}


export default Checkout;