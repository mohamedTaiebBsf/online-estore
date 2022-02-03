import styled from "styled-components";

const Container = styled.ul`
  background: var(--white);
  position: absolute;
  top: calc(100% - 0.625rem);
  right: 0;
  list-style: none;
  width: 7.125rem;
  z-index: 1;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

export { Container };
