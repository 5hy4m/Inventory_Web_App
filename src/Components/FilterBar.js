import React, { Component } from 'react'

export class FilterBar extends Component {
    render() {
        return (
            <nav className=" flex-fill filterbar flex-column " style={{zIndex: -1000}}>
            <div className="navbar p-0">
              <div className="nav-item dropdown">
                <button type="button" className="filldropdown dropdown-toggle" data-toggle="dropdown">
                  All Customers
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="google.com">Link 1</a>
                  <a className="dropdown-item" href="google.com">Link 2</a>
                  <a className="dropdown-item" href="google.com">Link 3</a>
                  <a className="dropdown-item" href="google.com">Link 3</a>
                </div>
              </div>
              <ul className=" navbar-nav flex-row ml-auto">
                <li className="nav-item">
                  <button className=" mt-1 btn btn-outline-primary btn-sm py-1 " href="google.com">
                    New <b> +</b>
                  </button> 
                </li>
                <li className="nav-item p-0">
                  <a className="nav-link p-0 dropdown" id="filterbarmenu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="google.com">
                    <img className="menuicon" src="dotted_burger.png"  alt="wide.png" />
                  </a> 
                  <div className="dropdown-menu" aria-labelledby="filterbarmenu">
                  <h6 className="dropdown-header">Sort By</h6>
                    <a className="dropdown-item" href="google.com">Name</a>
                    <a className="dropdown-item" href="google.com">Company Name</a>
                    <a className="dropdown-item" href="google.com">Recievables</a>
                  </div>
                </li>
                <div>
                </div></ul>
            </div>
          </nav>
          
        )
    }
}

export default FilterBar
