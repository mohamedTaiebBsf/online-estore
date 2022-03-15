import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  background: var(--white);
  width: 70%;
  border: 1px solid var(--gray);
  padding: 1rem;
  left: 50%;
  top: 5rem;
  transform: ${({ $show }) =>
    $show ? "translate(-50%, 0)" : "translate(-50%, -100vh)"};
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  pointer-events: ${({ $show }) => ($show ? "all" : "none")};
  transition: all 0.4s ease-in-out;
  -webkit-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.53);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.53);
  border-radius: 0.625rem;
`;

export default Container;
