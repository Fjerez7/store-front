import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import ViewProducts from "../pages/ViewProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

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
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: "/checkout",
      element: <Checkout />,
    }
  ]);
}
