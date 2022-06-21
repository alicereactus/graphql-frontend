import {loader} from "graphql.macro";
import {useLazyQuery, useQuery} from "@apollo/client";

const queryPetById = loader("./gql/QueryPetById.graphql")

export const useQueryPetById = () => {
    const [getPetById, { loading, error, data }] = useLazyQuery(queryPetById)

    return { getPetById, loading, error, pet: data && data.petById }
}