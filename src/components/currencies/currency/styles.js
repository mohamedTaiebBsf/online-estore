import styled from "styled-components";

const Container = styled.li`
  text-align: center;
  padding: 0.625rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: var(--gray);
    color: var(--white);
    cursor: pointer;
  }
`;

const Text = styled.span`
  margin-right: 0.625rem;

  &:last-child {
    margin-right: 0;
  }
`;

export { Container, Text };
