import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShopApp = () => {
    const [product,changeProduct] = useState([])
    const fetchData = ()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                console.log(response.data)
                changeProduct(response.data)
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
                            product.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card">
                                        <img src={value.image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">₹{value.price}</h5>
                                            <p className="card-text">{value.title}</p>
                                            <Link to="" className="btn btn-primary">Buy Now</Link>
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

export default ShopApp