import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5625rem;
  /* border: 1px solid var(--black);
  padding: 1rem;
  border-radius: 0.625rem; */

  &:last-child {
    margin-bottom: 0;
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
};
