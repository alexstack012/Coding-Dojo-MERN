import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export default props => {
    const { removeFromDom, product } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {product.map((prod, idx) => {
                return <p key={idx}>
                    <Link to={"/product/" + prod._id}>
                        {prod.title}, {prod.price}, {prod.description}
                    </Link>
                    -|-
                    <button onClick={(e) => { deleteProduct(prod._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}