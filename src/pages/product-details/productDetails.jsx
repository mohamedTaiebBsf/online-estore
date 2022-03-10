import React from "react";
import Layout from "../layout/layout";
import Attributes from "../../components/attributes/attributes";
import ProductImages from "../../components/product-images/productImages";
import AbstractCart from "../../components/cart/abstract-cart/abstractCart";
import * as productService from "../../services/product-service";
import { withProductDetails } from "../../services/http-service";
import { storeConsumer } from "../../store";
import { findById, isEmpty, parseHtml } from "../../utils";
import {
  Container,
  Descriptions,
  Brand,
  Name,
  SubTitle,
  Price,
  Button,
  Text,
  Stock,
} from "./styles";

class ProductDetails extends AbstractCart {
  descriptionRef = React.createRef();

  shouldComponentUpdate(nextProps, nextState) {
    const { currency, options, cartItems } = this.props;

    if (
      nextProps.currency !== currency ||
      nextProps.options !== options ||
      nextProps.cartItems !== cartItems
    )
      return true;

    return false;
  }

  getSelectedOptionsFromCart = () => {
    const productId = this.props.match.params.id;
    const product = findById(this.props.cartItems, productId);

    if (product && !isEmpty(product.selectedOptions)) {
      return product.selectedOptions;
    }

    return [];
  };

  isDisabled = () => {
    const selectedOptions = this.getSelectedOptionsFromCart();
    const { product } = this.props.data;
    const { options } = this.props;

    if (!isEmpty(selectedOptions)) return false;

    return product.attributes.length !== options.length;
  };

  chooseOption = (attrId, itemId) => {
    const { product } = this.props.data;

    if (!isEmpty(this.getSelectedOptionsFromCart())) return false;
    if (!product.inStock) return false;

    this.selectOption(attrId, itemId);
  };

  render() {
    const { product } = this.props.data;

    return (
      <Layout>
        <Container>
          <ProductImages images={product.gallery} />
          <Descriptions>
            <Brand>{product.brand}</Brand>
            <Name>{product.name}</Name>
            {!product.inStock && <Stock>Out Of Stock</Stock>}
            <Attributes
              select={this.chooseOption}
              attributes={product.attributes}
              selectedOptions={
                !isEmpty(this.props.options)
                  ? this.props.options
                  : this.getSelectedOptionsFromCart()
              }
            />
            <SubTitle>Price: </SubTitle>
            <Price>
              {productService.price(product.prices, this.props.currency)}
            </Price>
            <Button
              onClick={() => this.addToCart(product, "product-details")}
              disabled={this.isDisabled()}
            >
              Add To Cart
            </Button>
            <Text ref={this.descriptionRef} />
          </Descriptions>
        </Container>
      </Layout>
    );
  }

  componentWillUnmount() {
    this.props.clearOptions();
  }

  componentDidMount() {
    const { product } = this.props.data;

    this.descriptionRef.current.innerHTML = parseHtml(product.description);
  }
}

export default storeConsumer(
  withProductDetails(ProductDetails, {
    name: "product details",
    callback: (props) => {
      return {
        variables: {
          id: props.match.params.id,
        },
      };
    },
  })
);
