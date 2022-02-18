import React, { Component } from "react";
import Header from "../../components/header/header";
import Backdrop from "../../components/UI/backdrop/backdrop";
import { storeConsumer } from "../../store";
import Container from "./styles";

class Layout extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { showMiniCart, children } = this.props;

    if (
      nextProps.showMiniCart !== showMiniCart ||
      nextProps.children !== children
    )
      return true;

    return false;
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Backdrop
            show={this.props.showMiniCart}
            clicked={this.props.closeMiniCart}
          />
          {this.props.children}
        </Container>
      </React.Fragment>
    );
  }
}

export default storeConsumer(Layout);
