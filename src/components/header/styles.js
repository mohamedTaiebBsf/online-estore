import styled from "styled-components";

const Container = styled.header`
  padding: 0 6.25rem;

  @media (max-width: 768px) {
    padding: 0 3.125rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.625rem 0;
`;

const Logo = styled.img``;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 1.25rem;
  z-index: 7;
`;

const CartIcon = styled.img`
  width: 1.25rem;
`;

const CartBadge = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.5375rem;
  right: -0.7rem;
  color: var(--white);
  background: var(--black);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
`;

const CurrencySymbol = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  z-index: 7;
`;

const Arrow = styled.img`
  width: 0.625rem;
  margin-left: 0.5rem;
  transform: ${(props) => (props.$show ? "rotate(180deg)" : "none")};
`;

export {
  Container,
  Wrapper,
  Logo,
  CartContainer,
  CartIcon,
  CartBadge,
  CurrencySymbol,
  Arrow,
};
