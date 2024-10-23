import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { GET_ALL_COLLECTIONS, GET_SUBCATEGORIES_BY_PARENT, GET_TOP_LEVEL_COLLECTIONS } from "~/GraphQL/collection_queries";

const client = new ApolloClient({
  uri: "http://localhost:3000/shop-api",
  cache: new InMemoryCache(),
  // Uncomment and set this if you need authentication
  // headers: {
  //   Authorization: `Bearer YOUR_API_TOKEN`,
  // },
});

provideApolloClient(client);

export const getAllCollectionsWithAssets = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_COLLECTIONS,
    });
    const collections = data.collections.items;
    return collections;
  } catch (error) {
    console.error("Error fetching collections with assets:", error);
  }
};

export const getTopLevelCollection = async () => {
  try {
    const { data } = await client.query({
      query: GET_TOP_LEVEL_COLLECTIONS,
    });
    const collections = data.collections.items;
    return collections;
  } catch (error) {
    console.error("Error fetching collections with assets:", error);
  }
};

export const getSubcategoriesByParent = async (parentId) => {
  try {
    const { data } = await client.query({
      query: GET_SUBCATEGORIES_BY_PARENT,
      variables: { parentId },
    });
    const subcategories = data.collections.items;
    return subcategories;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return [];
  }
};

