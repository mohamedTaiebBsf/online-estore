import styled from "styled-components";

const TrashIcon = styled.img`
  position: absolute;
  right: 0;
  width: 1.25rem;
  filter: invert(30%) sepia(57%) saturate(6200%) hue-rotate(340deg)
    brightness(94%) contrast(83%);
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5625rem;
  border-bottom: ${({ $isCart }) =>
    $isCart ? "1px solid var(--gray)" : "none"};
  padding-bottom: ${({ $isCart }) => ($isCart ? "1.5625rem" : "0rem")};
  position: relative;

  & ${TrashIcon} {
    top: ${({ $isCart }) => ($isCart ? "1.25rem" : "0rem")};
  }

  &:hover ${TrashIcon} {
    opacity: 1;
    visibility: visible;
  }

  &:first-child {
    border-top: ${({ $isCart }) =>
      $isCart ? "1px solid var(--gray)" : "none"};

    padding-top: ${({ $isCart }) => ($isCart ? "1.5625rem" : "0rem")};
  }

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: none;
  }
`;

const Column = styled.div`
  &:first-child {
    margin-right: 0.625rem;
  }

  &:last-child {
    display: flex;
    align-items: center;
    height: 12.5rem;
  }
`;

const Brand = styled.h3`
  font-weight: 300;
  margin-bottom: 0.3125rem;
  font-size: 1rem;
`;

const Name = styled.div`
  font-weight: 300;
  margin-bottom: 0.625rem;
  font-size: 1rem;
`;

const Price = styled.p`
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const ImageWrapper = styled.div`
  width: 6.5625rem;
  height: 8.4375rem;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const Quantity = styled.div`
  font-weight: 500;
  font-size: 1rem;
  flex: 2;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  outline: none;
  border: 1px solid var(--black);
  background: transparent;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--black);
    color: var(--white);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  Container,
  Column,
  Brand,
  Name,
  Price,
  ImageWrapper,
  Image,
  Actions,
  Quantity,
  Button,
  TrashIcon,
};
