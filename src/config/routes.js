import Home from "../pages/home/home";
import Product from "../pages/product-details/productDetails";
import Cart from "../pages/cart/cart";
import NotFound from "../pages/not-found/not-found";
import Checkout from "../pages/checkout/checkout";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/product/:id", component: Product },
  { path: "*", component: NotFound },
];

export default routes;
