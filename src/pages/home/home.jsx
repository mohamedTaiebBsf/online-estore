import React, { Component } from "react";
import Products from "../../components/products/products";
import { storeConsumer } from "../../store";
import Layout from "../layout/layout";
import { Title } from "./styles";

class Home extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { categ } = this.props;

    if (nextProps.categ !== categ) return true;

    return false;
  }

  render() {
    return (
      <Layout>
        <Title>{this.props.categ}</Title>
        <Products />
      </Layout>
    );
  }
}

export default storeConsumer(Home);
