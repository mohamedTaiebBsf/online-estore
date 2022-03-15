import styled from "styled-components";

const Container = styled.div`
  margin-bottom: ${({ $isCart }) => ($isCart ? 0 : "2.5rem")};
`;

export { Container };
