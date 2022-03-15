import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  transition: transform 0.3s ease-in-out;
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  background: var(--green);
  border-radius: 50%;
  position: absolute;
  bottom: -1.5rem;
  right: 1rem;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s;
`;

const Container = styled.div`
  opacity: ${(props) => (props.$inStock ? 1 : 0.7)};
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    transform: scale(1.05);

    & ${Image} {
      transform: scale(1.05);
    }

    & ${CartContainer} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 18.75rem;
  position: relative;
  text-align: center;
`;

const Title = styled.p`
  font-weight: 300;
  font-size: 1.125rem;
  margin-bottom: 0.3125rem;
`;

const CartIcon = styled.img`
  filter: invert(150%) sepia(12%) saturate(0%) hue-rotate(45deg)
    brightness(150%) contrast(101%);
`;

const Price = styled.h4`
  font-weight: 500;
  font-size: 1.125rem;
`;

const Notif = styled.p`
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  font-size: 1.5rem;
  color: var(--gray);
  width: 100%;
  text-align: center;
  opacity: 1;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--black);
`;

export {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  Title,
  Price,
  CartContainer,
  CartIcon,
  Notif,
  Anchor,
};
