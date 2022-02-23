import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 6.25rem;
  position: relative;

  @media (max-width: 48rem) {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }

  @media (max-width: 23.4375rem) {
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }
`;

export default Container;
