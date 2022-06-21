import React from "react"
import {useQueryPetById} from "../hooks/UseQueryPetById/UseQueryPetById";

export const Pet = () => {
    const { getPetById, loading, error, pet } = useQueryPetById()

    const loadPet = () => getPetById({
        variables: {
            id: "C-1"
        }
    })

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>We have a problem: {error.message}</p>
    }

    return (
        <>
            <h1>Pet</h1>
            <button onClick={loadPet}>Download Pet</button>
            <p>{pet && pet.name}</p>
        </>
    )
}