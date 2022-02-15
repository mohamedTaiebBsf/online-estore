import styled from "styled-components";

const Container = styled.div`
  margin-bottom: ${(props) => (props.$isCart ? 0 : "2.5rem")};
`;

export { Container };
