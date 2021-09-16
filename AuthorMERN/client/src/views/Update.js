import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import {
    Link
} from "react-router-dom";
import { Button } from '@material-ui/core';
export default props => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [notFound, setNotFound] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log("response is this--->", res)
                if (res.data.value) {
                    setNotFound(true)
                } else {
                    setName(res.data.name);
                }
            })
            .catch(err => {
                console.log("error finding an author with that id --> ", err)
            })
        
    }, [])
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Author</h1>
            {notFound ?
                <>
                    <h1>The author is not found, please create one</h1>
                    <Link to="/author">Create a new author</Link>
                </>    :
             <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
                {/* <Button type="submit">Submit</Button> */}
            </form>    

            }
           
            <Link to={"/author/"}>
                Home
            </Link>
        </div>
    )
}