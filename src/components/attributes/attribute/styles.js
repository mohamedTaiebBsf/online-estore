import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  padding: 0.875rem 1.5rem;
  border: 1px solid var(--black);
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  margin-bottom: 0.75rem;
  margin-right: 0.75rem;
  cursor: pointer;
  background: ${(props) => (props.$isColor ? props.$isColor : "transparent")};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export { Container, Title, Items, Item };
