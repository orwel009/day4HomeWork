import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const UserDummyApp = () => {
    const [data,changeData] = useState(
        {"users":[]}
    )
    const fetchData = ()=>{
        axios.get("https://dummyjson.com/users").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            data.users.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src={value.image} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.firstName} {value.lastName}</h5>
                                            <p class="card-text">{value.email}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Age:{value.age}</li>
                                            <li class="list-group-item">{value.gender}</li>
                                            <li class="list-group-item">{value.university}</li>
                                        </ul>
                                    </div>
                                </div>
                                }
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDummyApp