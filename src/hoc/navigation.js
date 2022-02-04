/**
 * This navigation HOC is implemented because It is not allowed
 * to use functional components and their hooks and React Router
 * Dom version 6 does not support class-based components
 */

import { useParams } from "react-router-dom";
import { useEffect } from "react";
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
  )((props) => {
    const params = useParams();

    useEffect(() => {
      if (Object.keys(params).length === 0) {
        props.setCategory("all");
      } else if (!Object.keys(params).includes("category")) {
        props.setCategory(props.categ);
      } else {
        props.setCategory(params.category);
      }
    }, [params, props]);

    return <WrappedComponent {...props} params={params} />;
  });

export default withNavigation;
