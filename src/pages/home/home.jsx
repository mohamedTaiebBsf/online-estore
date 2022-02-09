import React, { Component } from "react";
import Layout from "../layout/layout";
import withNavigation from "../../hoc/navigation";
import { Title } from "./styles";
import Products from "../../components/products/products";

class Home extends Component {
  render() {
    console.log("Home", this.props);
    return (
      <Layout>
        <Title>{this.props.params.category || "All"}</Title>
        <Products />
      </Layout>
    );
  }
}

export default withNavigation(Home);
