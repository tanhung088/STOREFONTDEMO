import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const 
const client = new ApolloClient({
  uri: "http://your-vendure-server.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer YOUR_API_TOKEN`, // Include this if authentication is needed
  },
});

const GET_PRODUCTS = gql`
  query {
    products {
      items {
        id
        name
        price {
          currencyCode
          value
        }
      }
    }
  }
`;

client
  .query({
    query: GET_PRODUCTS,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error));
