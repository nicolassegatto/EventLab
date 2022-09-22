import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl8b0k4xi0a1j01uiehbr9byz/master',
    cache: new InMemoryCache()
})