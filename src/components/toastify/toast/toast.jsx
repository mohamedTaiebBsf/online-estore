import React, { Component } from "react";
import { CloseIcon, Container, Message, ProgressBar } from "./styles";

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
    const { mode, message, onClose } = this.props;
    const { exitedToast, width } = this.state;

    return (
      <Container
        $mode={mode}
        $exited={exitedToast}
        onMouseEnter={this.handlePauseTimer}
        onMouseLeave={this.handleStartTimer}
      >
        <Message>{message}</Message>
        <CloseIcon onClick={onClose}>x</CloseIcon>
        <ProgressBar style={{ width: `${width}%` }} />
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
