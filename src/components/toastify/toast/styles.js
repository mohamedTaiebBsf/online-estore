import styled, { keyframes } from "styled-components";

const slideLeftAnimation = keyframes`
  0% {
    transform: translateX(120%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const slideRightAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(120%);
  }
`;

const Container = styled.div`
  width: 18.75rem;
  min-height: 3.125rem;
  text-align: center;
  position: relative;
  color: white;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  border-radius: 0.3125rem;
  border: 1px solid transparent;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.4 ease;
  -webkit-animation: ${(props) =>
      props.$exited ? slideRightAnimation : slideLeftAnimation}
    0.5s forwards;
  animation: ${(props) =>
      props.$exited ? slideRightAnimation : slideLeftAnimation}
    0.5s forwards;

  &:hover {
    box-shadow: 0px 0px 3px var(--gray);
  }

  background: ${(props) => {
    switch (props.mode) {
      case "success":
        return "#28a745";
      case "warning":
        return "#ffc107";
      case "error":
        return "#dc3545";
      default:
        return "#007bff";
    }
  }};
`;

const Message = styled.p`
  font-weight: 500;
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0.3125rem;
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 0.3125rem;
  background: var(--white);
`;

export { Container, Message, CloseIcon, ProgressBar };
