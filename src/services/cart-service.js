import { format, omit, findById, copy } from "../utils";

const omittedAttrs = ["inStock", "description", "category", "gallery"];

const has = (cart, product) => {
  return cart.reduce((prev, curr) => curr.id === product.id || prev, false);
};

const customizeItem = (product) => {
  return omit(
    {
      ...product,
      image: product.gallery[0],
      quantity: 1,
    },
    omittedAttrs
  );
};

const countItems = (items) => {
  let total = 0;

  items.forEach((item) => {
    total += item.quantity;
  });

  return total;
};

const totalPrice = (items, currency) => {
  let total = 0;

  items.forEach((item) => {
    const price = item.prices.find(
      (price) => currency === price.currency.symbol
    );

    if (price) total += price.amount * item.quantity;
  });

  return `${currency}${format(total)}`;
};

const increaseItemQuantity = (items, productId) => {
  const cartItems = copy(items);
  const item = findById(cartItems, productId);

  if (item) {
    cartItems[cartItems.indexOf(item)].quantity++;

    return cartItems;
  } else {
    throw new Error("Product not found!");
  }
};

const decreaseItemQuantity = (items, productId) => {
  const cartItems = copy(items);
  const item = findById(cartItems, productId);

  if (item) {
    const index = cartItems.indexOf(item);

    if (cartItems[index].quantity === 1) return null;

    cartItems[index].quantity--;

    return cartItems;
  } else {
    throw new Error("Product not found!");
  }
};

const removeItemFromProduct = (items, productId) => {
  let cartItems = copy(items);
  const item = findById(cartItems, productId);

  if (item) {
    cartItems = cartItems.filter((prd) => prd.id !== productId);

    return cartItems;
  } else {
    throw new Error("Product not found!");
  }
};

export {
  has,
  customizeItem,
  countItems,
  totalPrice,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromProduct,
};
