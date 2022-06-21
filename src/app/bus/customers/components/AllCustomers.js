import React from "react";
import {useQueryAllCustomers} from "../hooks/UseQueryAllCustomers/UseQueryAllCustomers";

export const AllCustomers = () => {
    const {loading, error, customers} = useQueryAllCustomers()

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>We have a problem: {error.message}</p>
    }

    return (
        <>
            <h1>Customers</h1>

            <table border="1">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Created</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map(({username, name, dateCreated}, index) => {
                        return (
                            <tr key={index}>
                                <td>{username}</td>
                                <td>{name}</td>
                                <td>{dateCreated}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}