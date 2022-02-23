import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "./styles";

class Logo extends Component {
  render() {
    return (
      <Link to="/" onClick={this.props.onClick}>
        <Image src="/assets/images/app-logo.svg" alt="logo" />
      </Link>
    );
  }
}

export default Logo;
