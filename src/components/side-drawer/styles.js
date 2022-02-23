import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  background: var(--white);
  color: var(--white);
  position: fixed;
  z-index: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 0px 8px -3px rgba(29, 31, 34, 0.8);
  -webkit-box-shadow: 6px 0px 8px -3px rgba(29, 31, 34, 0.8);
  -moz-box-shadow: 6px 0px 8px -3px rgba(29, 31, 34, 0.8);
  transform: translateX(-102%);
  transition: transform 0.3s ease-out;

  &.open {
    transform: translateX(0);
  }
`;

const LogoWrapper = styled.div`
  display: none;

  @media (max-width: 23.4375rem) {
    display: block;
    position: absolute;
    top: 4.375rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export { Container, LogoWrapper };
