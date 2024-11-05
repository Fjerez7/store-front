import { Card } from "primereact/card";
import { FC } from "react";

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

export const Product: FC<ProductProps> = ({ image, title, price }) => {
  const header = <img src={image} className="h-[400px]" />;

  return (
    <Card
      title={title}
      subTitle={price}
      header={header}
      className="w-[400px] h-[550px]"
    />
  );
};
