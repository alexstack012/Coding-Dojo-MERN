import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { useParams } from 'react-router';

export default props => {
    console.log("detail component, props.id is this-->", props.id)
    const [author, setAuthor] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then(res => {
                console.log(res)
                setAuthor(res.data)
            })
    }, [])
    return (
        <div>
            <p>Name: {author.name}</p>
            <Link to={"/author/" + author._id + "/edit"}>
                Edit
            </Link>
        </div>


    )
}