import React, { Component } from "react";
import { Container, Message, CloseIcon, ProgressBar } from "./styles";

class Toast extends Component {
  state = {
    width: 0,
    intervalId: null,
    exitedToast: false,
  };

  handleStartTimer = () => {
    let width = this.state.width;

    let intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (width < 100) {
          return { width: prevState.width + 0.5 };
        }

        this.handlePauseTimer();

        return prevState;
      });
    }, 20);

    this.setState({ intervalId });
  };

  handlePauseTimer = () => {
    clearInterval(this.state.intervalId);
  };

  handleAutomaticClose = () => {
    this.handlePauseTimer();
    this.setState({ exitedToast: true });
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.width === 100) {
      this.handleAutomaticClose();
    }
  }

  componentWillUnmount() {
    this.handlePauseTimer();
  }

  componentDidMount() {
    this.handleStartTimer();
  }
}

export default Toast;
