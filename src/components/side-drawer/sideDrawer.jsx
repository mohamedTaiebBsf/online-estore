import React, { Component } from "react";
import Categories from "../categories/categories";
import Backdrop from "../UI/backdrop/backdrop";
import Logo from "../UI/logo/logo";
import { Container, LogoWrapper } from "./styles";

class SideDrawer extends Component {
  render() {
    const { open, onClose } = this.props;

    return (
      <React.Fragment>
        <Backdrop show={open} clicked={onClose} />
        <Container className={open && "open"}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Categories sideDrawerClose={onClose} />
        </Container>
      </React.Fragment>
    );
  }
}

export default SideDrawer;
