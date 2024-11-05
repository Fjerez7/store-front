import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import ViewProducts from "../pages/ViewProducts";
import ProductDetails from "../pages/ProductDetails";

export default function Root() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ViewProducts />,
    },
    {
      path: "/products/product/:id",
      element: <ProductDetails />,
    },
  ]);
}
