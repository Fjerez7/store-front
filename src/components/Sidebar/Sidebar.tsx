import { Sidebar as PrimeSidebar } from "primereact/sidebar";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <PrimeSidebar visible={isOpen} onHide={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col gap-8">
          <NavLink to={"/"} className="text-2xl">
            Home
          </NavLink>
          <NavLink to={"/products"} className="text-2xl">
            Products
          </NavLink>
          <NavLink to={"/"} className="text-2xl">
            Cart
          </NavLink>
        </div>
      </PrimeSidebar>
    </>
  );
};
