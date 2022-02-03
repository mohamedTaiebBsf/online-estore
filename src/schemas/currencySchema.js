import { gql } from "@apollo/client";

const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

export { GET_CURRENCIES };
