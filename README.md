# Online Store

> <img src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/logotype-v1/image_uploads/bdfccb87-9d38-4234-be31-e3d209b9516b/original.png" alt="scandiweb" width="80" /> _React Assignment_ ✨✨✨

## Demo 🚀

Click [here](https://scandiweb-online-estore.herokuapp.com) to visualize the demo.

## Tech

- [React.js]([https://angularjs.org/](https://fr.reactjs.org/))
- [Redux](https://redux.js.org/)
- [Graphql](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Styled components](https://styled-components.com/)

## _Installation_

1. Clone or download the [backend](https://github.com/mohamedTaiebBsf/junior-react-endpoint) repository and run:

   ```sh
   $ yarn install
   $ yarn build
   $ yarn start
   ```

2. Clone or download this repository.

3. **Before starting the app**, It is **required** to Create `.env` file and set `REACT_APP_BACKEND_URL` environment variable to http://localhost:4000.

   ```sh
   REACT_APP_BACKEND_URL=http://localhost:4000
   ```

4. run:

   ```sh
   $ npm install
   $ npm start
   ```

5. Navigate to http://localhost:3000 in
   your preferred browser and enjoy! 👋

> 👀 If you create .env after launching the app, you should stop the app and re-start it again!

## _Overview_

> _**How do this app work?**_

**Homepage**

- On the homepage, you are expected to view products that can be sorted via categories in the header.

- When you hover over the product, you can add it to the cart by clicking to the green cart icon.

- Some products are **Out Of Stock**. They _**cannot**_ be added to the cart.

- Once you click on the product, you are redirected to its own page where you get some details.

- When you click to add-to-product green icon, if the product is already in the cart, then, it's added again by updating its quantity. Otherwise, if the product has **no** attributes, it will be added. But, if the product has attributes, a modal shows.

- On the modal, you find all product's attributes. Here, you can select your preferred ones.

- If you cancel or click outside the modal, no selected attributes will be persisted, so when you show the modal again, you should select attributes again.

- Once you select all your favourite attributes, the accept button is enabled and by clicking on it, the product is now added to the cart and the modal is closed.

👀 **Once the product is added to the cart, the selected options cannot be changed!** The same logic is in the homepage and the product-details page.

**Product Details page**

- On the product details page, all product's informations are shown.

- You are able to add this product to the cart.

- If the product is already in the cart, you can view that the selected attributes are highlighted and you cannot change them. Otherwise, you are able to select your preferred options and add the product to the cart.

- If the product is out of stock, you can neither select options nor add it to the cart.

**Cart page & mini cart**

- You can show the mini-cart by clicking ont the shopping cart icon in the header.

- The products added to the cart are shows in the mini-cart and cart page.

- You are able to change product quantity.

- You can view the total price corresponding to the selected currency.

- You can remove one single product from the cart.

- In cart page, you can reset the cart.

**Header**

- Three categories are fetched from the backend: _All_, _Clothes_ and _Tech_.

- You are able to change products currency to one of the available currencies.

- If there are some products in the cart, a badge above the header cart icon appears and marks the total number of products added to the cart.

> 👀 **_The application state is persisted on page reload._** 👋

**Notifications**

- A success notification appears once a product is added to the cart.

- An error notification appears when the backend is offline or you get 400 bad request.
