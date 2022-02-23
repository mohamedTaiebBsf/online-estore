import React, { Component } from "react";
import Categories from "../categories/categories";
import Backdrop from "../UI/backdrop/backdrop";
import Logo from "../UI/logo/logo";
import { Container, LogoWrapper } from "./styles";

class SideDrawer extends Component {
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.open} clicked={this.props.onClose} />
        <Container className={this.props.open && "open"}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Categories sideDrawerClose={this.props.onClose} />
        </Container>
      </React.Fragment>
    );
  }
}

export default SideDrawer;
