import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

export { GET_CATEGORIES };
