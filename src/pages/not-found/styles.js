import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #313942;
  height: 100vh;
  color: #e7ebf2;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 12.5rem;
  margin: 0.025em 0;
  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  font-weight: 700;

  @media (max-width: 31.25rem) {
    font-size: 5rem;
  }
`;

const spookyAnimation = keyframes`
  from {
    transform: translatey(0.15em) scaley(0.95);
  }

  to {
    transform: translatey(-0.15em);
  }
`;

const Image = styled.img`
  filter: drop-shadow(0.05em 0.05em 0 rgba(0, 0, 0, 0.25));
  width: 7.5rem;
  margin: 0 1.25rem;
  animation: ${spookyAnimation} 2s alternate infinite linear;

  @media (max-width: 31.25rem) {
    width: 3.125rem;
  }
`;

const Error = styled.h2`
  margin-bottom: 0.4em;
`;

const Description = styled.p`
  color: #ccc;
  margin-bottom: 20px;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: #e7ebf2;
  border-radius: 1.875rem;
  padding: 8px 50px;
  border: 4px solid var(--green);
  position: relative;
  transition: background 0.5s ease-in-out;

  &:hover {
    color: var(--white);
    background: var(--green);
  }
`;

export { Container, Wrapper, Title, Image, Error, Description, Anchor };
