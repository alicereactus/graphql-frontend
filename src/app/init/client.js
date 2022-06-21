import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const uri = 'https://funded-pet-library.moonhighway.com/'

export const client = new ApolloClient({
    link: createHttpLink({ uri }),
    cache: new InMemoryCache(),
})