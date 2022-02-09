import React, { Component } from "react";
import Header from "../../components/header/header";
import Backdrop from "../../components/UI/backdrop/backdrop";
import Container from "./styles";
import { connect } from "../../store";

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

const mapStateToProps = (state) => ({
  showMiniCart: state.showMiniCart,
});

const mapDispatchToProps = (dispatch) => ({
  closeMiniCart: () => dispatch({ type: "CLOSE_MINI_CART" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
