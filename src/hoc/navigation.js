/**
 * This navigation HOC is implemented because It is not allowed
 * to use functional components and React Router Dom version 6
 * does not support class-based components
 */

import { useParams } from "react-router-dom";

const withNavigation = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

export default withNavigation;
