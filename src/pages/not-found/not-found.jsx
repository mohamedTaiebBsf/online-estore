import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Title,
  Image,
  Error,
  Description,
  Anchor,
} from "./styles";

class NotFound extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>
            4<Image src="/assets/images/ghost.png" alt="ghost" />4
          </Title>
          <Error>Error: 404 page not found</Error>
          <Description>
            Sorry, the page you're looking for no more exists!
          </Description>
          <Anchor to="/">Go Back Home</Anchor>
        </Wrapper>
      </Container>
    );
  }
}

export default NotFound;
