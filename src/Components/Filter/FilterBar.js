import React, { Component } from 'react'

export class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType : this.props.filterType,
    }
    this.sendFilterFromDropDown = this.sendFilterFromDropDown.bind(this)
    this.sendFilterFromButton = this.sendFilterFromButton.bind(this)
  }

// To send the selected item from the dropdown to the Parent
  sendFilterFromDropDown(e){
    e.preventDefault();
    this.props.setFilterFromDropDown(e.target.innerText)
  }

// To send the selected item from the dropdown button to the Parent
  sendFilterFromButton(e){
    e.preventDefault();
    this.props.setFilterFromButton(e.target.innerText)
  }

    render() {
          switch (this.state.filterType) {
            case 'Customers':
              var button=<button id="outlinebutton" data-toggle="modal" data-target=".newcustomer-modal-xl" className=" mt-1 btn btn-sm py-1 " href="google.com">
                            New <b> +</b>
                        </button> 
              var menubar=<div className="dropdown-menu" aria-labelledby="filterbarmenu">
                            <h6 className="dropdown-header">Sort By</h6>
                            <a className="dropdown-item" onClick={this.sendFilterFromButton} href="google.com">Name</a>
                            <a className="dropdown-item" onClick={this.sendFilterFromButton} href="google.com">Company Name</a>
                            <a className="dropdown-item" onClick={this.sendFilterFromButton} href="google.com">Recievables</a>
                          </div>
              break;
            case 'Invoice':
              button = <button id="outlinebutton" data-toggle="modal" data-target=".newinvoice-modal-xl" className=" mt-1 btn btn-sm py-1 " href="google.com">
                          New <b> +</b>
                        </button>
              menubar=<div className="dropdown-menu" aria-labelledby="filterbarmenu">
                        <h6 className="dropdown-header">Sort By</h6>
                        <a className="dropdown-item" href="google.com">Name</a>
                        <a className="dropdown-item" href="google.com">Company Name</a>
                        <a className="dropdown-item" href="google.com">Recievables</a>
                      </div>
           break; 
            default:
              break;
          }
        return (
            <nav className=" flex-fill filterbar flex-column ">
            <div className="navbar p-0">
              <div className="nav-item dropdown">
                <button type="button outlinebutton" id="dropdowninfilterbar" className="filldropdown dropdown-toggle" data-toggle="dropdown">
                  All Customers
                </button>
                <div className="dropdown-menu">
                  <a onClick={this.sendFilterFromDropDown.bind(this)} className="dropdown-item" href="google.com">All {this.props.filterType}</a>
                  <a onClick={this.sendFilterFromDropDown.bind(this)} className="dropdown-item" href="google.com">Paid {this.props.filterType}</a>
                  <a onClick={this.sendFilterFromDropDown.bind(this)} className="dropdown-item" href="google.com">UnPaid {this.props.filterType}</a>
                </div>
              </div>
              <ul className=" navbar-nav flex-row ml-auto">
                <li className="nav-item">
                  {button}
                </li>
                <li className="nav-item p-0">
                  <a className="nav-link p-0 dropdown" id="filterbarmenu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="google.com">
                    <img className="menuicon" src="dotted_burger.png"  alt="wide.png" />
                  </a> 
                  {menubar}
                </li>
                <div>
                </div></ul>
            </div>
          </nav>
          
        )
    }
}

export default FilterBar
