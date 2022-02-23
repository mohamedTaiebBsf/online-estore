import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: var(--white);
  position: absolute;
  top: 20%;
  right: 0;
  padding: 1rem;
  z-index: 6;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  pointer-events: none;
  max-height: 31.25rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--gray);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(141, 143, 154, 0.7);
  }

  &.open {
    top: 100%;
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
`;

const Title = styled.h5`
  font-weight: 700;
  margin-bottom: 1.5625rem;

  &.empty-cart {
    margin-bottom: 1.875rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const TotalItems = styled.span`
  font-weight: 500;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 1.875rem;
`;

const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const Price = styled.p`
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--black);
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.8125rem 2.25rem;
  border: 1px solid var(--black);
  transition: all 0.4s ease;

  &:hover {
    color: var(--white);
    background: var(--black);
  }

  &:first-child {
    margin-right: 1rem;

    @media (max-width: 28.75rem) {
      margin-right: 0;
      margin-bottom: 0.625rem;
    }
  }

  &:last-child {
    color: var(--white);
    background: var(--green);
    border: none;
    position: relative;

    &:hover {
      opacity: 0.8;
    }

    &:disabled:hover,
    &[disabled]:hover {
      opacity: 1;
    }

    &:disabled,
    &[disabled] {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
      cursor: not-allowed;

      &:active {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 28.75rem) {
    width: 100%;
    text-align: center;
  }
`;

export {
  Container,
  Title,
  TotalItems,
  TotalPrice,
  Label,
  Price,
  Actions,
  Anchor,
};
