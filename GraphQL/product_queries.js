import { gql } from "@apollo/client/core";

export const GET_TOTAL_PRODUCTS_BY_COLLECTION = gql`
  query GetTotalProductsByCollection($collectionId: ID!) {
    search(input: { collectionId: $collectionId }) {
      totalItems
    }
  }
`;
