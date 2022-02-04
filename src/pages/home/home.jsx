import React, { Component } from "react";
import Layout from "../layout/layout";
import withNavigation from "../../hoc/navigation";
import { Title } from "./styles";
import Products from "../../components/products/products";

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

export default withNavigation(Home);
