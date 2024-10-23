import { gql } from "@apollo/client/core";

// Define all your GraphQL queries here
export const GET_ALL_COLLECTIONS = gql`
  query GetAllCollections {
    collections {
      items {
        id
        slug
        name
        parentId
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`;

export const GET_TOP_LEVEL_COLLECTIONS = gql`
  query GetAllCollections {
    collections(options: { topLevelOnly: true }) {
      items {
        id
        slug
        name
        parentId
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`;

export const GET_SUBCATEGORIES_BY_PARENT = gql`
  query GetSubcategoriesByParent($parentId: String!) {
    collections(options: { filter: { parentId: { eq: $parentId } } }) {
      items {
        id
        name
        slug
      }
    }
  }
`;
