import React, { Component } from "react";
import Layout from "./layout";
import withNavigation from "../hoc/navigation";

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
        <div>Home</div>
      </Layout>
    );
  }
}

export default withNavigation(Home);
