import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-bottom: 2.6875rem;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Button = styled.button`
  border: transparent;
  outline: none;
  background: var(--green);
  padding: 1rem 5.8125rem;
  transition: background 0.3s ease;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  margin: 1.5625rem 0;

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

export { Container, Descriptions, Brand, Name, Price, Button, Text, SubTitle };
