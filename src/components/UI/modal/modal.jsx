import React, { Component } from "react";
import Backdrop from "../backdrop/backdrop";
import Container from "./styles";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { show, children } = this.props;

    if (nextProps.show !== show || nextProps.children !== children) return true;

    return false;
  }

  render() {
    const { show, children, modalClosed } = this.props;

    return (
      <React.Fragment>
        <Backdrop
          styles={{ position: "fixed", zIndex: 99 }}
          show={show}
          clicked={modalClosed}
        />
        <Container $show={show}>{children}</Container>
      </React.Fragment>
    );
  }
}

export default Modal;
