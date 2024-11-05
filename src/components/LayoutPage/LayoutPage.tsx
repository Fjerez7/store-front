import { FC, ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

export const LayoutPage: FC<LayoutProps> = ({ children }) => {
  return <div className="flex justify-center py-[80px]">{children}</div>;
};
