import React from 'react';
import { Pets } from './bus/pets/Pets';
import { client } from "./init/client"
import {ApolloProvider} from "@apollo/client";
import {Customers} from "./bus/customers/Customers";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Pets />

            <Customers />
        </ApolloProvider>
    )
}