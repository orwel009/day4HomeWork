import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const UserApp = () => {
    const [data,changeData] = useState(
        {"data":[]}
    )
    const fetchData = ()=>{
        axios.get("https://reqres.in/api/users?page=1").then(
            (response)=> {
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
                            data.data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src={value.avatar} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                        <p class="card-text">{value.id}</p>
                                            <h5 class="card-title">{value.first_name} {value.last_name}</h5>
                                            <p class="card-text">{value.email}</p>
                                        </div>
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

export default UserApp