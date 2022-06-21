import React, {useState} from "react"

export const UseCustomer = () => {
    const [values, setValues] = useState({
        account: {
            name: "",
            username: "",
            password: ""
        }
    })

    const handleChange = (event) => {
        event.persist()
        setValues((prevValues) => ({
            account: {
                ...prevValues.account,
                [event.target.name]: event.target.value
            }
        }))
    }

    const handleSubmit = () => {
        console.log(values)
    }

    return { values, handleChange, handleSubmit }
}