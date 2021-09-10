import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';

export default props => {
    console.log("detail component, props.id is this-->", props.id)
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res)
                setProduct(res.data)
            })
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>


    )
}