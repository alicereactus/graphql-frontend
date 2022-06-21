import React from "react"
import {UseCustomer} from "../hooks/UseCustomer/UseCustomer";

export const Registration = () => {
    const { values, handleChange, handleSubmit } = UseCustomer()

    return (
        <>
            <h1>Registration</h1>
            <input type={"text"} placeholder={"Name"} name={"name"} value={values.name} onChange={handleChange} />
            <input type={"text"} placeholder={"Username"} name={"username"} value={values.username} onChange={handleChange} />
            <input type={"password"} placeholder={"Password"} name={"password"} value={values.password} onChange={handleChange}/>
            <button type={"submit"} onClick={handleSubmit}>Save</button>
        </>
    )
}