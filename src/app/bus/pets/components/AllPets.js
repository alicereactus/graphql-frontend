import React from "react";
import {useQueryAllPets} from "../hooks/UseQueryAllPets/UseQueryAllPets";

export const AllPets = () => {
    const { loading, error, pets } = useQueryAllPets()

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>We have a problem: {error.message}</p>
    }

    return (
        <>
            <h1>All Pets</h1>

            {
                pets.map(({ id, name, weight }) => {
                     return (
                         <p key={id}>
                             <span>Name: {name}</span>
                             <br />
                             <span>Weight: {weight}</span>
                         </p>
                     )
                })
            }
        </>
    )
}