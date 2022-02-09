import React, { Component } from "react";
import { Container, Anchor } from "./styles";
import { connect } from "../../../store";

class Category extends Component {
  render() {
    const { name } = this.props.category;

    return (
      <Container
        className={this.props.active && "active"}
        onClick={() => this.props.setCurrentCategory(name)}
      >
        <Anchor to={`/?${name}`}>{name}</Anchor>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentCategory: (category) =>
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category }),
});

export default connect(null, mapDispatchToProps)(Category);
