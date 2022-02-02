import styled, { keyframes } from "styled-components";

const loadAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--black);
  background: -moz-linear-gradient(
    left,
    var(--black) 10%,
    rgba(29, 31, 34, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    var(--black) 10%,
    rgba(29, 31, 34, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    var(--black) 10%,
    rgba(29, 31, 34, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    var(--black) 10%,
    rgba(29, 31, 34, 0) 42%
  );
  background: linear-gradient(
    to right,
    var(--black) 10%,
    rgba(29, 31, 34, 0) 42%
  );
  position: relative;
  -webkit-animation: ${loadAnimation} 1.4s infinite linear;
  animation: ${loadAnimation} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: var(--black);
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &::after {
    background: var(--white);
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default Container;
