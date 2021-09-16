import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export default props => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    return (
        <div>
            {props.author.map((author, idx) => {
                return <p key={idx}>
                    {author.name}
                    ---
                    <button style={{ backgroundColor: '#ee78ff', color: "black" }}>
                        <Link to={"/author/" + author._id}>
                            Edit
                        </Link>
                    </button>
                    ---
                    <button style={{ backgroundColor: '#ee78ff', color: "black", textDecoration: "underline"}} onClick={(e) => { deleteAuthor(author._id) }}>
                    Delete
                </button>
                </p>
            })}
        </div >
    )
}