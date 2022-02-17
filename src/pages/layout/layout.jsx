import React, { Component } from "react";
import Header from "../../components/header/header";
import Backdrop from "../../components/UI/backdrop/backdrop";
import { storeConsumer } from "../../store";
import Container from "./styles";

class Layout extends Component {
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
