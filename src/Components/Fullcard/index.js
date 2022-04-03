import React from "react"
import Header from "../Header"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import "./index.css"

export default function Fullcard(){

    const[final,setfinal]=useState({})

    const req=useParams()

    console.log("got it",req)
    useEffect(()=>{
        fetch(`http://localhost:8888/workouts/${req.id}`,{method:"GET"}).then(res=>(res.json()))
        .then((data)=>setfinal(data))
    },[])


    return(
        <>
            <Header/>
                <div className="main-card-container">
                    <div className="main-card">
                        <img src={final.imageurl} className="card-image"/>
                        <div className="card-content">
                            <h1 className="card-heading">{final.heading}</h1>
                            <p className="card-calories">Loss of Weight : <span className="calorie">{final.Calorieburnperhour} Calorie/hr</span></p>
                            <h1 className="card-descrip">Description</h1>
                            <p className="card-para">{final.fulldiscription}</p>
                        </div>
                    </div>
                    <div className="video-player">
                        <h1 className="card-title">How To Work</h1>
                        <div className="video-container">
                        <ReactPlayer height="450px" width="800px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                        </div>
                    </div>
                </div>
        </>
    )
}