import React, { Component } from "react";
import { Container, Message, CloseIcon, ProgressBar } from "./styles";

class Toast extends Component {
  state = {
    width: 0,
    intervalId: null,
    exitedToast: false,
  };

  handleStartTimer = () => {
    let intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.width < 100) {
          return { width: prevState.width + 0.5 };
        } else {
          this.handleAutomaticClose();

          return {
            exitedToast: true,
          };
        }
      });
    }, 20);

    this.setState({ intervalId });
  };

  handlePauseTimer = () => {
    clearInterval(this.state.intervalId);
  };

  handleAutomaticClose = () => {
    this.handlePauseTimer();
    setTimeout(this.props.onClose, 0.1);
  };

  render() {
    return (
      <Container
        $mode={this.props.mode}
        $exited={this.state.exitedToast}
        onMouseEnter={this.handlePauseTimer}
        onMouseLeave={this.handleStartTimer}
      >
        <Message>{this.props.message}</Message>
        <CloseIcon onClick={this.props.onClose}>x</CloseIcon>
        <ProgressBar style={{ width: `${this.state.width}%` }} />
      </Container>
    );
  }

  componentWillUnmount() {
    this.handlePauseTimer();
  }

  componentDidMount() {
    this.handleStartTimer();
  }
}

export default Toast;
