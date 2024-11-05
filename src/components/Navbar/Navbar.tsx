import { Button } from "primereact/button";
import { FC } from "react";
interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="flex justify-between items-center h-[80px] bg-[#ffcc03] px-[40px] ">
      <i className="pi pi-bars cursor-pointer" onClick={onToggleSidebar} />
      <div>
        <Button label="Account" icon="pi pi-user" text className="mr-10 p-2" />
        <Button label="Cart" icon="pi pi-shopping-cart" text className="p-2" />
      </div>
    </div>
  );
};
