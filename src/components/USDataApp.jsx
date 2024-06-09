import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const USDataApp = () => {
    const [data,changeData] = useState(
        {"data":[]}
    )
    const fetchData = ()=>{
        axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(
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
                    <table className="table">
                        <thead className='table-info'>
                            <tr>
                            <th scope="col">ID Nation</th>
                            <th scope="col">Nation</th>
                            <th scope="col">Year</th>
                            <th scope="col">Population</th>
                            </tr>
                        </thead>
                        <tbody className='table-secondary'>
                            {
                                data.data.map(
                                    (value,index)=>{
                                        return <tr>
                                            <td>{value['ID Nation']}</td>
                                            <td>{value.Nation}</td>
                                            <td>{value.Year}</td>
                                            <td>{value.Population}</td>
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

export default USDataApp