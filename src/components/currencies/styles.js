import styled from "styled-components";

const Container = styled.ul`
  background: var(--white);
  position: absolute;
  top: 20%;
  right: 0;
  list-style: none;
  width: 7.125rem;
  z-index: 6;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  pointer-events: none;

  &.open {
    top: calc(100% - 0.625rem);
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
`;

const spinnerStyles = {
  position: "absolute",
  top: "1.625rem",
  right: "2.4rem",
  display: "block",
  width: "1.25rem",
  height: "1.25rem",
};

export { Container, spinnerStyles };
