import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  &.options-in-cart {
    margin-bottom: 0;
    & > h4 {
      font-size: 0.700rem;
    }

    & > div > div {
      padding: ${(props) =>
        !props.$isColor ? "0.3rem 0.5rem" : "0.875rem 1rem"};
      }
    }
  }
`;

const Title = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export { Container, Title };
