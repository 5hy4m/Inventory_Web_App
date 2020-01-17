import React, { Component } from 'react'

export class TopNav extends Component {
    render() {
        return (
            <header>
        <nav   className="navbar  topnav navbar-expand-lg navbar-light">
          <a   className="navbar-brand" href="google.com">Inventory Web App</a>
          <button   className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarnav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span   className="navbar-toggler-icon">
            </span></button>
          <div   className="collapse navbar-collapse" id="topbarnav">
            <ul   className="navbar-nav mr-auto">
            <li   className="itemtop nav-item dropdown">
                <a href="google.com"  className="plusontop nav-link" id="adddropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="plus.png"  className="my-auto plusimg" alt="wide.jpeg" />
                </a>
                <div   className="dropdown-menu" aria-labelledby="adddropdown">
                  <a   className="dropdown-item" href="google.com" data-toggle="modal" data-target=".newcustomer-modal-xl">Add New
                    Customer</a>
                  <a   className="dropdown-item" href="google.com" data-toggle="modal" data-target=".newinvoice-modal-xl">Add New
                    Invoice</a>
                  <a   className="dropdown-item" href="google.com" data-toggle="modal" data-target=".newitem-modal-xl">Add New Item</a>
                </div>
              </li>
              <li   className="itemtop nav-item active">
                <a   className="nav-link" href="google.com">Home <span   className="sr-only" /></a>
              </li>
              
              <li   className="itemtop nav-item">
                <a   className="nav-link" href="google.com">Link</a>
              </li>
              <li   className="itemtop nav-item dropdown">
                <a   className="nav-link dropdown-toggle" href="google.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div   className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a   className="dropdown-item" href="google.com">Action</a>
                  <a   className="dropdown-item" href="google.com">Another action</a>
                  <div   className="dropdown-divider">
                    <a   className="dropdown-item" href="google.com">Something else here</a>
                  </div>
                </div></li>
              <li   className="itemtop nav-item">
                <a   className="nav-link disabled" href="google.com">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        )
    }
}

export default TopNav
