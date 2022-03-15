import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 6.25rem;
  position: relative;
  min-height: calc(100vh - 4.175rem);

  @media (max-width: 48rem) {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }

  @media (max-width: 23.4375rem) {
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
    min-height: calc(100vh - 4.1125rem);
  }
`;

export default Container;
