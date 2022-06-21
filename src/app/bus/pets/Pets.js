import React from "react";
import {AvailablePets} from "./components/AvailablePets"
import {AllPets} from "./components/AllPets";
import {AllAvailablePets} from "./components/AllAvailablePets";
import {Pet} from "./components/Pet";

export const Pets = () => {
    return (
        <>
            <AvailablePets />
            <AllPets />
            <AllAvailablePets />
            <Pet />
        </>
    )
}