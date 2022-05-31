// Core
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";

// GraphQL Server
const uri = 'https://funded-pet-library.moonhighway.com/'

export const client = new ApolloClient({
    link: createHttpLink({ uri }),
    cache: new InMemoryCache(),
})