import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from "react-router-dom";
import { useParams } from 'react-router';

export default props => {
    console.log("detail component, props.id is this-->", props.id)
    const [person, setPerson] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
            .then(res => {
                console.log(res)
                setPerson(res.data)
            })
    }, [])
    return (
        <div>
            <h1>Test</h1>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <Link to={"/people/" + person._id + "/edit"}>
                Edit
            </Link>
        </div>


    )
}