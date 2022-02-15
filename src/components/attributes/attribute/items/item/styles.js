import styled from "styled-components";

const Container = styled.div`
  padding: 0.875rem 1.5rem;
  border: 1px solid var(--black);
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  margin-bottom: 0.75rem;
  margin-right: 0.75rem;
  cursor: pointer;
  position: relative;
  background: ${(props) =>
    props.$isColor
      ? props.$isColor
      : props.$selected
      ? "var(--black)"
      : "transparent"};

  color: ${(props) =>
    props.$selected && !props.$isColor ? "var(--white)" : "auto"};

  border: ${(props) =>
    props.$isColor && props.$selected
      ? "0.3125rem solid var(--black)"
      : "auto"};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export { Container };
