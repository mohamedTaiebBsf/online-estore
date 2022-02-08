import React, { Component } from "react";
import { connect } from "../store";

const mapStateToProps = (state) => ({
  categ: state.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) =>
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category }),
});

const withNavigation = (WrappedComponent) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class extends Component {
      state = {};

      static getDerivedStateFromProps(props, state) {
        const params = props.match.params;

        if (Object.keys(params).length === 0) {
          props.setCategory("all");
        } else if (!Object.keys(params).includes("category")) {
          props.setCategory(props.categ);
        } else {
          props.setCategory(params.category);
        }

        return state;
      }

      render() {
        const { category } = this.props.match.params;
        console.log("WithNavigation: ", this.props, category);
        return <WrappedComponent params={this.props.match.params} />;
      }
    }
  );

export default withNavigation;
