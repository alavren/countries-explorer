import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
  {
    countries {
      code
      continent {
        name
      }
      currency
      emoji
      languages {
        code
        name
        native
      }
      name
      native
      phone
    }
  }
`;