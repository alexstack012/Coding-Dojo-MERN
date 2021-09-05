import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    BrowserRouter,
    Link,
    Switch,
    Route,
    useHistory
} from "react-router-dom";

const Search = (props) => {
    
    const [starWarsData, setStarWarsData] = useState({})
    const [dropDownKeys, setDropDownKeys] = useState([])
    const [formInfo, setFormInfo] = useState({
        term: "people",
        idInput: ""
    })
    
    const history = useHistory();
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                console.log("################")
                console.log(response)
                console.log("################")
                setStarWarsData(response.data)
                setDropDownKeys(Object.keys(response.data))
            })
            .catch(err => {
                console.log("ERROR ", err)
            })
    }, [])

    const changeHandler = (e) => {
        console.log("filling out the form")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // always want this in a submit handler for a submit for a form
        history.push(`/${formInfo.term}/${formInfo.idInput}`)
        console.log("this is working")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Search for: <select onChange={changeHandler} name="term" id="">
                    {dropDownKeys.map((item, i) => {
                        return <option key={i} value={item}>{item}</option>
                    })}


                </select></p>
                <p>Id:<input onChange={changeHandler} type="number" name="idInput" id=""></input></p>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
};

export default Search;