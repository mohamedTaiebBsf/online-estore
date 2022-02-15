import React, { Component } from "react";
import Layout from "../layout/layout";
import { Title } from "./styles";
import Products from "../../components/products/products";
import { connect } from "../../store";

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

const mapStateToProps = (state) => ({
  categ: state.selectedCategory,
});

export default connect(mapStateToProps)(Home);
