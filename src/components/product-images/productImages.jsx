import React, { Component } from "react";
import {
  BigImage,
  BigImageWrapper,
  Container,
  Thumbnail,
  Thumbnails,
  ThumbnailWrapper,
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
    const { selectedImage } = this.state;

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
          <BigImage src={selectedImage} />
        </BigImageWrapper>
      </Container>
    );
  }
}

export default ProductImages;
