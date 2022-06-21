import {useLazyQuery} from "@apollo/client";
import {loader} from "graphql.macro";

const queryAllAvailablePets = loader("./gql/QueryAllAvailablePets.graphql")

export const useQueryAllAvailablePets = () => {
    const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(queryAllAvailablePets)

    return { getAllAvailablePets, loading, error, pets: data && data.allAvailablePets }
}