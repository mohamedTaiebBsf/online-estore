import React, { Component } from "react";
import Container from "./styles";

class Backdrop extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { show } = this.props;

    if (nextProps.show !== show) return true;

    return false;
  }

  render() {
    const { show, clicked, styles: bdStyles } = this.props;
    const styles = bdStyles ? bdStyles : null;

    return show ? <Container style={styles} onClick={clicked} /> : null;
  }
}

export default Backdrop;
