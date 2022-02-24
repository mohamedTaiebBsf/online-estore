import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  grid-gap: 1.25rem;

  @media (max-width: 37.5rem) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (max-width: 27.5rem) {
    grid-template-columns: 1fr !important;
  }

  @media (max-width: 72.5rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 90rem) {
    grid-template-columns: repeat(4, minmax(18.75rem, 1fr));
  }

  @media (min-width: 112.5rem) {
    grid-template-columns: repeat(5, minmax(18.75rem, 1fr));
  }
`;

const ModalTitle = styled.h3`
  text-align: center;
  font-size: 1.5625rem;
  font-style: italic;
  margin-bottom: 2.5rem;
  font-family: "Roboto", "cursive", auto, sans-serif;
`;

const ModalButton = styled.button`
  outline: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 28.75rem) {
    width: 100%;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & ${ModalButton}:first-child {
    background: var(--black);
    color: var(--white);

    @media (max-width: 28.75rem) {
      margin-bottom: 0.625rem;
    }
  }

  & ${ModalButton}:last-child {
    background: var(--green);
    color: var(--white);

    &:disabled,
    &[disabled] {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
      cursor: not-allowed;
    }
  }
`;

export { Container, ModalTitle, ModalActions, ModalButton };
