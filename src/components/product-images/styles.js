import styled from "styled-components";

const Container = styled.div`
  flex: 3;
  display: flex;
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
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
`;

const BigImage = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  Container,
  Thumbnails,
  Thumbnail,
  ThumbnailWrapper,
  BigImageWrapper,
  BigImage,
};
