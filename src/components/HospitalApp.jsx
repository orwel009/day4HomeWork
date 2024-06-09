import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const HospitalApp = () => {
    const [data,changeData] = useState(
        {"data":{"regional":[]}}
    )
    const fetchData = ()=>{
        axios.get("https://api.rootnet.in/covid19-in/hospitals/beds").then(
            (response)=>{
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
                    <table className="table">
                        <thead className='table-info'>
                            <tr>
                            <th scope="col">State</th>
                            <th scope="col">TotalHospital</th>
                            <th scope="col">TotalBeds</th>
                            </tr>
                        </thead>
                        <tbody className='table-secondary'>
                            {
                                data.data.regional.map(
                                    (value,index)=>{
                                        return <tr>
                                            <td>{value.state}</td>
                                            <td>{value.totalHospitals}</td>
                                            <td>{value.totalBeds}</td>
                                        </tr>
                                    }
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HospitalApp