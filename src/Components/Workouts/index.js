import Header from "../Header"
import { useEffect, useState } from "react"
import "./index.css"
import Card from "../Card"

export default function Workouts(){

// const get=async()=>{
//     const res=await fetch("http://localhost:8888/workouts",{method:"GET"
// })
// const data=await res.json()
// console.log(data)
// // return(data.map(each=>(<img src={each.imageurl}/>)))

// }
const[element,setelement]=useState([])

const[initial,setIntial]=useState("")

useEffect(async() => {

    console.log("i am in useeffect")
    // const resp=await fetch("http://localhost:6000/workouts",{
    //     method:"GET"
    // })
    // console.log(resp)

    // const data=await resp.json()
    // console.log("jeffa",data)
    // setelement(data)
    fetch('http://localhost:4000/workouts',{
        method:"GET"
    })
    .then(res => res.json())
    .then(data => {
        console.log("jeffa",data);
        setelement(data)
        ;
    })
  }, [])


  const settingvalue=(event)=>{
        setIntial(event.target.value)
  }

    return(
        <div className="main-home-container">
        <Header/>
            <div className="main-home-container-2">
                <div>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://img.freepik.com/free-vector/vector-cartoon-background-gym-with-girls-doing-fitness_33099-1205.jpg?w=1380&t=st=1648898526~exp=1648899126~hmac=e4346e0a0ecfed1d2e32dcfd360f716cab7eeb1945a8909b976ca0d2f8dd2a88" className="d-block w-70" alt="coursel"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://img.freepik.com/free-vector/gym-isometric-landing-page-fitness-equipment_107791-897.jpg?w=1380&t=st=1648898665~exp=1648899265~hmac=cf8de39d9edce8a758e67fb2b3041efd807728094eb4898bf29624337c61eb55" className="d-block w-70" alt="coursel"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.freepik.com/free-vector/people-working-out-physical-exercises-characters_316839-2086.jpg?w=1380" className="d-block w-70" alt="coursel"/>
                            </div>
                        </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                <div>
                    <div className="input-group input-cust">
                        <span className="input-group-text">Search</span>
                        {/* <textarea classname="form-control" aria-label="With textarea" onChange={settingvalue}></textarea> */}
                        <input type="text" onChange={settingvalue} className="input-cont"/>
                    </div>
                </div>
                <ul className="list-item-container">
                    {element.length===0?"":element.filter((eachele)=>(eachele.heading.toLowerCase().includes(initial))).map(each=>(<Card key={each.id} each={each}/>))}
                </ul>
            </div>
        </div>
    )
}