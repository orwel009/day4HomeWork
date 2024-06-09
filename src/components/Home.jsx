import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">ShopApp</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/shopapp" class="btn btn-primary">Explore</Link>
                      </div>
                    </div>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">USDataApp</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/usdataapp" class="btn btn-primary">Explore</Link>
                      </div>
                    </div>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">UserApp</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="userapp" class="btn btn-primary">Explore</Link>
                      </div>
                    </div>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">UserDummyApp</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="userdummyapp" class="btn btn-primary">Explore</Link>
                      </div>
                    </div>
                </div>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Airlines</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="airlineapp" class="btn btn-primary">Explore</Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home