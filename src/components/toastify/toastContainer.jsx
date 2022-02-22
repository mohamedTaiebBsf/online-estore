import ReactDOM from "react-dom";
import { Component } from "react";
import Toast from "./toast/toast";
import { storeConsumer } from "../../store";
import { uuid } from "../../utils";
import { Container, toastParentStyle } from "./styles";

class ToastContainer extends Component {
  state = {
    loaded: false,
    containerId: `toast-${uuid()}`,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { toasts } = this.props;
    const { loaded } = this.state;

    if (toasts !== nextProps.toasts || loaded !== nextState.loaded) return true;

    return false;
  }

  render() {
    const { loaded, containerId } = this.state;
    const { toasts } = this.props;

    return loaded
      ? ReactDOM.createPortal(
          <Container className="toast-container ">
            {toasts.map((t) => (
              <Toast
                key={t.id}
                mode={t.mode}
                message={t.message}
                onClose={() => this.props.removeToast(t.id)}
              />
            ))}
          </Container>,
          document.getElementById(containerId)
        )
      : null;
  }

  componentWillUnmount() {
    document.body.removeChild(document.getElementById(this.state.containerId));
  }

  componentDidMount() {
    const toastParent = document.createElement("div");
    toastParent.id = this.state.containerId;
    toastParent.style = toastParentStyle;
    document.body.prepend(toastParent);

    this.setState({ loaded: true });
  }
}

export default storeConsumer(ToastContainer);
