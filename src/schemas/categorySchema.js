import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

const GET_CATEGORY_PRODUCTS = gql`
  query GetCategoryProducts($categoryName: String!) {
    category(input: { title: $categoryName }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export { GET_CATEGORIES, GET_CATEGORY_PRODUCTS };
