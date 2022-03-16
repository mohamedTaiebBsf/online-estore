import React, { Component } from "react";
import Header from "../../components/header/header";
import SideDrawer from "../../components/side-drawer/sideDrawer";
import Backdrop from "../../components/UI/backdrop/backdrop";
import { storeConsumer } from "../../store";
import Container from "./styles";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    browserSize: window.innerWidth,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false }, this.mobileBodyOverflowHidden);
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    }, this.mobileBodyOverflowHidden);
  };

  mobileBodyOverflowHidden = () => {
    const { closeMiniCart, closeCurr } = this.props;

    const { showSideDrawer } = this.state;
    if (showSideDrawer) {
      document.body.style.overflow = "hidden";

      closeMiniCart();
      closeCurr();
    } else {
      document.body.style.overflow = "";
    }
  };

  updateBrowserSize = () => {
    this.setState({ browserSize: window.innerWidth });
  };

  setCategory = (name) => {
    const { setCateg, showMiniCart, closeMiniCart } = this.props;

    setCateg(name);

    if (showMiniCart) {
      closeMiniCart();
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { showMiniCart, children } = this.props;
    const { showSideDrawer, browserSize } = this.state;

    if (
      nextProps.showMiniCart !== showMiniCart ||
      nextProps.children !== children ||
      nextState.showSideDrawer !== showSideDrawer ||
      nextState.browserSize !== browserSize
    )
      return true;

    return false;
  }

  render() {
    const { showMiniCart, closeMiniCart, children } = this.props;
    const { showSideDrawer, browserSize } = this.state;

    return (
      <React.Fragment>
        {browserSize <= 550 && (
          <SideDrawer
            onClose={this.sideDrawerClosedHandler}
            open={showSideDrawer}
            setCategory={this.setCategory}
          />
        )}
        <Header
          onSideDrawerClick={this.sideDrawerToggleHandler}
          openSideDrawer={showSideDrawer}
          browserSize={browserSize}
          setCategory={this.setCategory}
        />

        <Container>
          <Backdrop show={showMiniCart} clicked={closeMiniCart} />
          {children}
        </Container>
      </React.Fragment>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateBrowserSize);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateBrowserSize);
  }
}

export default storeConsumer(Layout);
