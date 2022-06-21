import React from "react";
import {useQueryAllAvailablePets} from "../hooks/UseQueryAllAvailablePets/UseQueryAllAvailablePets";

export const AllAvailablePets = () => {
    const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets()

    const loaderJsx = loading && (
        <p>Loading...</p>
    )

    const errorJsx = error && (
        <p>We have a problem: {error.message}</p>
    )

    const petsJsx = pets && pets.map(({ id, name, weight }) => {
        return (
            <p key={id}>
                <span>Name: {name}</span>
                <br />
                <span>Weight: {weight}</span>
            </p>
        )
    })

    return (
        <>
            <h1>All Available Pets</h1>

            <button onClick={getAllAvailablePets}>Download</button>
            {loaderJsx}
            {errorJsx}
            {petsJsx}
        </>
    )
}