import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    BrowserRouter,
    Link,
    Switch,
    Route,
    useHistory,
    useParams
} from "react-router-dom";

const Result = (props) => {
    const [info, setInfo] = useState({})
    // const [homePlanet, setHomePlanet] = useState("")
    const history = useHistory();
    const { categoryTerm, id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${categoryTerm}/${id}`)
            .then(response => {
                console.log("Response is here")
                console.log(response)
                setInfo(response.data)
            })
            .catch(err => {
                console.log("Error", err)
                history.push("/Error")
            })
    }, [categoryTerm, id])

    // useEffect(() => {
    //     axios.get(`/${info.homeworld}`)
    //         .then(response => {
    //             console.log(response)
                
    //         })
    //         .catch(err => {
    //             console.log("Error", err)
    //             history.push("/Error")

    //         })
    // }, [])

    return (
        <div>
            <h1>Results from your search for {categoryTerm} and {id}</h1>
            {/* <p>{info.homeworld}</p> */}
            {
                categoryTerm == "people" ?
                    <>
                        <p>Name: {info.name}</p>
                        <p>HomeWorld: {info.homeworld}</p>
                    </> : null
            }
            {
                categoryTerm == "planets" ?
                    <>
                        <p>Name: {info.name}</p>
                        <p>Climate: {info.climate}</p>
                        <p>Terrain: {info.terrain}</p>
                    </> : null
            }
            {
                categoryTerm == "films" ?
                    <>
                        <p>Title: {info.title}</p>
                        <p>Director: {info.director}</p>
                        <p>Episode: {info.episode_id}</p>
                    </> : null
            }
            {
                categoryTerm == "species" ?
                    <>
                        <p>Name: {info.name}</p>
                        <p>Classification: {info.classification}</p>
                        <p>Average Lifespan: {info.average_lifespan}</p>
                    </> : null
            }
            {
                categoryTerm == "vehicles" ?
                    <>
                        <p>Name: {info.name}</p>
                        {/* doesnt seem to work */}
                    </> : null
            }
            {
                categoryTerm == "starships" ?
                    <>
                        <p>Name: {info.name}</p>
                        {/* doesnt seem to work */}
                    </> : null
            }
            <Link to="/">Home</Link>
        </div>
    )
}
export default Result