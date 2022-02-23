import React, { Component } from "react";
import Header from "../../components/header/header";
import Backdrop from "../../components/UI/backdrop/backdrop";
import SideDrawer from "../../components/side-drawer/sideDrawer";
import { storeConsumer } from "../../store";
import Container from "./styles";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    browserSize: window.innerWidth,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  updateBrowserSize = () => {
    this.setState({ browserSize: window.innerWidth });
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
    return (
      <React.Fragment>
        {this.state.browserSize <= 550 && (
          <SideDrawer
            onClose={this.sideDrawerClosedHandler}
            open={this.state.showSideDrawer}
          />
        )}
        <Header
          onSideDrawerClick={this.sideDrawerToggleHandler}
          openSideDrawer={this.state.showSideDrawer}
          browserSize={this.state.browserSize}
        />

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

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateBrowserSize);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateBrowserSize);
  }
}

export default storeConsumer(Layout);
