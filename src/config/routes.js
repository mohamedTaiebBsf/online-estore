import Home from "../pages/home/home";
import Product from "../pages/product-details/productDetails";
import Cart from "../pages/cart";
import NotFound from "../pages/not-found/not-found";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/:category", component: Home },
  { path: "/product/:id", component: Product },
  { path: "*", component: NotFound },
];

export default routes;
