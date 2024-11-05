import { NavLink } from "react-router-dom";
import { LayoutPage } from "../components/LayoutPage/LayoutPage";
import { Product } from "../components/Product/Product";
import useProducts from "../hooks/useProducts";
import { Product as typeProduct } from "../types/Products";

const ViewProducts = () => {
  const { data } = useProducts();
  return (
    <LayoutPage>
      <div>
        <h1 className="text-center text-4xl mb-8">Collection</h1>
        <div className="grid grid-cols-3 gap-8">
          {data?.slice(0, 12).map((product: typeProduct, i: number) => {
            return (
              <NavLink key={i} to={`/products/product/${product.id}`}>
                <Product
                  key={i}
                  image={product.images[1]}
                  title={product.title}
                  price={`$${product.price}`}
                />
              </NavLink>
            );
          })}
        </div>
      </div>
    </LayoutPage>
  );
};

export default ViewProducts;
