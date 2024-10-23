import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { GET_PRODUCTS_BY_COLLECTION, GET_PRODUCTS_BY_SUBCATEGORY, GET_TOTAL_PRODUCTS_BY_COLLECTION } from "~/GraphQL/product_queries";

const client = new ApolloClient({
  uri: "http://localhost:3000/shop-api",
  cache: new InMemoryCache(),
  // Uncomment and set this if you need authentication
  // headers: {
  //   Authorization: `Bearer YOUR_API_TOKEN`,
  // },
});

provideApolloClient(client);

export const GetTotalProductsByCollection = async (collectionId) => {
  try {

    const response = await client.query({
      query: GET_TOTAL_PRODUCTS_BY_COLLECTION,
      variables: { collectionId },
    });

    const total = response.data.search.totalItems;
    return total;
  } catch (error) {
    console.error("Error fetching products for subcategory:", error);
    return 0;
  }
};
