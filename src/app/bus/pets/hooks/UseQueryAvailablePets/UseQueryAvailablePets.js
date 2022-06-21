import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";

const queryAvailablePets = loader("./gql/QueryAvailablePets.graphql")

export const useQueryAvailablePets = () => {
    return useQuery(queryAvailablePets)
}