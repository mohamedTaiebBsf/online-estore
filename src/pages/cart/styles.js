import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3.6875rem;

  &.empty-cart {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.625rem;
    font-family: "Roboto", sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.75rem;

  &.empty-cart {
    margin-top: 0;
    flex-direction: column;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
  margin-right: 0.625rem;
`;

const Price = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--white);
  background: var(--green);
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.8125rem 2.25rem;
  transition: all 0.4s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  margin-bottom: 1.5rem;
`;

const Remark = styled.p`
  margin-bottom: 2rem;
  font-weight: 500;
`;

export { Title, Wrapper, TotalPrice, Label, Price, Anchor, Image, Remark };
