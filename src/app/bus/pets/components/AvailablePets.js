import React from 'react';
import {useQueryAvailablePets} from "../hooks/UseQueryAvailablePets/UseQueryAvailablePets";

export const AvailablePets = () => {
    const { loading, error, data } = useQueryAvailablePets()

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>We have a problem: {error.message}</p>
    }

    return (
    <>
        <h1>Available Pets</h1>
        <p>Available pets: {data.availablePets}</p>
    </>
    )
}