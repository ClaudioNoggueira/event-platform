import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_PROJECT_API_URL,
  headers:{
    "authorization": `Bearer ${import.meta.env.VITE_PROJECT_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
});