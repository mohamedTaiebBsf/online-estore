import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  @media (max-width: 34.375rem) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export { Container };
