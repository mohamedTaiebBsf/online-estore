import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 34.375rem) {
    flex-direction: column;
  }
`;

const Descriptions = styled.div`
  flex: 2;
`;

const Brand = styled.h3`
  font-weight: 600;
  font-size: 1.875rem;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  font-size: 1.875rem;
  margin-bottom: 1.25rem;
`;

const Stock = styled.p`
  color: #dc3545;
  margin-bottom: 2.6875rem;
  font-weight: 700;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: 100%;
  border: transparent;
  outline: none;
  background: var(--green);
  padding: 1rem;
  transition: background 0.3s ease;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  margin: 1.5625rem 0;

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  &:disabled:hover,
  &[disabled]:hover {
    background-color: #cccccc;
  }

  &:hover {
    background: rgba(94, 206, 123, 0.8);
  }
`;

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

const SubTitle = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  margin-bottom: 0.625rem;
`;

export {
  Container,
  Descriptions,
  Brand,
  Name,
  Price,
  Button,
  Text,
  SubTitle,
  Stock,
};
