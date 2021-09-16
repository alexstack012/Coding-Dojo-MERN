import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/author', {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update Name and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name: </label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <button style={{ backgroundColor: '#ee78ff', color: "black", textDecoration: "underline" }} type="submit">Submit</button>
        </form>
    )
}