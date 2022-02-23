import styled from "styled-components";
import { Link } from "react-router-dom";

const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--black);
  display: inline-block;
  transition: color 0.4s ease;

  &:hover {
    color: var(--green);
  }
`;

const Container = styled.li`
  font-size: 1.125rem;
  padding: 0 1.25rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: var(--green);
    bottom: -1.375rem;
    left: 0;
    right: 0;
    display: inline-block;
    width: 0%;
    height: 0.125rem;
  }

  &.active::before {
    width: 100%;
  }

  &.active ${Anchor} {
    font-weight: 600;
    color: var(--green);
  }

  @media (max-width: 34.375rem) {
    margin-bottom: 5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export { Container, Anchor };
