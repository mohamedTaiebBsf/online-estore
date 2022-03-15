import styled from "styled-components";

const Container = styled.div`
  flex: 3;
  display: flex;

  @media (max-width: 34.375rem) {
    flex-direction: column;
    margin-bottom: 1.25rem;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 34.375rem) {
    order: 2;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 0;
  }
`;

const ThumbnailWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--black);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 34.375rem) {
    margin-bottom: 1rem;
    margin-right: 1rem;

    &:last-child {
      margin-bottom: 1rem;
      margin-right: 0;
    }
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const BigImageWrapper = styled.div`
  width: 100%;
  height: 25rem;
  margin-right: 2rem;
  cursor: pointer;
  text-align: center;

  @media (max-width: 34.375rem) {
    order: 1;
    margin-bottom: 1rem;
  }
`;

const BigImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

export {
  Container,
  Thumbnails,
  Thumbnail,
  ThumbnailWrapper,
  BigImageWrapper,
  BigImage,
};
