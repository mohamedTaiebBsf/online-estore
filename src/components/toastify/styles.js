import styled from "styled-components";

const Container = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const toastParentStyle = `
  position: fixed;
  top: 4.375rem;
  right: 0.625rem;
  z-index: 1000
`;

export { Container, toastParentStyle };
