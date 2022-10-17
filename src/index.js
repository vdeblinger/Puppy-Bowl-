import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom"

const PuppyBowlPage = () => {
    const [puppiesInBowl, setPuppiesInBowl] = useState([])

    useEffect(() => {
        async function grabPuppyData () {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players")
                const data = await response.json()
                console.log(data)
                console.log(data.data.players)
                setPuppiesInBowl(data.data.players)
            } catch (error) {
                console.log(error)
            }
        }
        grabPuppyData()
    }, [])

    return (

        <div>
            <h1>Puppy Bowl!</h1>
            <div id="main=container">
                {
                    puppiesInBowl && puppiesInBowl.length ? puppiesInBowl.map((individualPuppy, idx) => {
                        console.log(individualPuppy)
                        return <div key={idx} id="puppy-info">
                                <p id="puppy-name">Puppy Name: {individualPuppy.name}</p>
                                <p id="puppy-bread">Puppy Bread: {individualPuppy.breed}</p>
                                <div><img src={individualPuppy.imageUrl} id="puppy-pic"></img></div>
                            </div>
                    }) : <div>Puppy Servers are barked out - Please try again later.</div>
                }
            </div>
        </div>
    )
};

ReactDOM.render(<PuppyBowlPage />, document.getElementById("app"));