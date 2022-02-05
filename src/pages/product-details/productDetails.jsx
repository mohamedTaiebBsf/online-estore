import React, { Component } from "react";
import withNavigation from "../../hoc/navigation";
import Layout from "../layout/layout";
import Attributes from "../../components/attributes/attributes";
import ProductImages from "../../components/product-images/productImages";
import {
  Container,
  Descriptions,
  Brand,
  Name,
  SubTitle,
  Price,
  Button,
  Text,
} from "./styles";
import { withProductDetails } from "../../services/http-service";
import { connect } from "../../store";
import { displayPrice } from "../../utils";

class ProductDetails extends Component {
  render() {
    const { product } = this.props.data;
    console.log("Product Details", product, product.description);
    return (
      <Layout>
        <Container>
          <ProductImages images={product.gallery} />
          <Descriptions>
            <Brand>{product.brand}</Brand>
            <Name>{product.name}</Name>
            <Attributes attributes={product.attributes} />
            <SubTitle>Price: </SubTitle>
            <Price>{displayPrice(product.prices, this.props.currency)}</Price>
            <Button>Add To Cart</Button>
            <Text dangerouslySetInnerHTML={{ __html: product.description }} />
          </Descriptions>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currentCurrency,
});

export default withNavigation(
  withProductDetails(connect(mapStateToProps)(ProductDetails), (props) => {
    return {
      variables: {
        id: props.params.id,
      },
    };
  })
);
