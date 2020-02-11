import React, { Component } from 'react'
import '../../css/Details.css'

export class Details extends Component {
    render() {
        return (
            <div className="content p-0 d-flex flex-fill col-xs-12">
              <div className="nav customerbar scroll flex-column col-xl-2 col-md-2 col-sm-2 col-xs-2" style={{zIndex: -1000}}>
                <div className="allcustomers dropdown border-bottom d-flex h-10">
                  <button type="button" className="cusdropdown dropdown-toggle" data-toggle="dropdown">
                    All Customers
                  </button>
                  <div className="dropdown-menu">
                  </div>
                </div>
                <div className="customerlist d-flex font-weight-bold overflow-scroll ">
                  name
                </div>
                <div className="customerlist d-flex font-weight-bold overflow-scroll ">
                  name
                </div>
                <div className="customerlist d-flex font-weight-bold overflow-scroll ">
                  name
                </div>
              </div>         
              <div className="cusdetailscontainer d-flex col-xl- col-md-10 col-sm-10 col-xs-10">
                <div className="cusdetheader d-flex flex-column">
                  {/* NavBar */}
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="awdawd.com">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="google.com">Home <span className="sr-only"> </span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="google.com">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="google.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="google.com">Action</a>
                            <a className="dropdown-item" href="google.com">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="google.com">Something else here</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="google.com" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                    </div>
                  </nav>
                  {/* Navigation tabs */}
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link active " data-toggle="tab" href="google.com">Active</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="google.com">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="google.com">Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" data-toggle="tab" href="google.com" tabIndex={-1} aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}

export default Details
