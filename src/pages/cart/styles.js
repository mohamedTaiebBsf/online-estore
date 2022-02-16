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

  &.title-wrapper {
    margin-top: 0;
    margin-bottom: 3.6875rem;

    & ${Title} {
      margin-bottom: 0;
    }
  }

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

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: #dc3545;
  color: var(--white);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const TrashIcon = styled.img`
  width: 0.9375rem;
  margin-left: 0.5rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg)
    brightness(101%) contrast(104%);
`;

export {
  Title,
  Wrapper,
  TotalPrice,
  Label,
  Price,
  Anchor,
  Image,
  Remark,
  Button,
  TrashIcon,
};
