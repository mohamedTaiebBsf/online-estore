import Home from "../pages/home";
import Product from "../pages/product";
import Cart from "../pages/cart";
import NotFound from "../pages/not-found/not-found";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: Product },
  { path: "/cart", component: Cart },
  { path: "*", component: NotFound },
];

export default routes;
