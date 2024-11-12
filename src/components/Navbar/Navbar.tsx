import { Button } from "primereact/button";
import { FC } from "react";
import { NavLink } from "react-router-dom";
interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="flex justify-between items-center h-[80px] bg-[#ffcc03] px-[40px] ">
      <i className="pi pi-bars cursor-pointer" onClick={onToggleSidebar} />
      <div>
        <NavLink to={'/cart'}><Button label="Cart" icon="pi pi-shopping-cart" text className="p-2" /></NavLink>
      </div>
    </div>
  );
};
