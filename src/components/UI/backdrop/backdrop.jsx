import React, { Component } from "react";
import Container from "./styles";

class Backdrop extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { show } = this.props;

    if (nextProps.show !== show) return true;

    return false;
  }

  render() {
    const styles = this.props.styles ? this.props.styles : null;

    return this.props.show ? (
      <Container style={styles} onClick={this.props.clicked} />
    ) : null;
  }
}

export default Backdrop;
