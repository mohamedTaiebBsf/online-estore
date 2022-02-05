import React, { Component } from "react";
import {
  Container,
  Thumbnails,
  Thumbnail,
  ThumbnailWrapper,
  BigImageWrapper,
  BigImage,
} from "./styles";

class ProductImages extends Component {
  state = {
    selectedImage: this.props.images[0],
  };

  setBigImage = (imageUrl) => {
    this.setState({
      selectedImage: imageUrl,
    });
  };

  render() {
    const { images } = this.props;

    return (
      <Container>
        <Thumbnails>
          {images.map((image, i) => (
            <ThumbnailWrapper key={i} onClick={() => this.setBigImage(image)}>
              <Thumbnail src={image} />
            </ThumbnailWrapper>
          ))}
        </Thumbnails>
        <BigImageWrapper>
          <BigImage src={this.state.selectedImage} />
        </BigImageWrapper>
      </Container>
    );
  }
}

export default ProductImages;
