import React, { Component } from "react";
import Layout from "../layout/layout";
import Products from "../../components/products/products";
import { storeConsumer } from "../../store";
import { Title } from "./styles";

class Home extends Component {
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
