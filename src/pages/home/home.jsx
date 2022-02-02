import React, { Component } from "react";
import Layout from "../layout/layout";
import withNavigation from "../../hoc/navigation";
import { Title } from "./styles";
import Products from "../../components/products/products";

class Home extends Component {
  state = {
    selectedCategory: "",
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { params } = nextProps;

    if (Object.keys(params).length === 0) {
      return { selectedCategory: "all" };
    }

    return { selectedCategory: params.category };
  }

  render() {
    return (
      <Layout category={this.state.selectedCategory}>
        <Title>{this.state.selectedCategory}</Title>
        <Products category={this.state.selectedCategory} />
      </Layout>
    );
  }
}

export default withNavigation(Home);
