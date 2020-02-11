import React, { Component } from 'react';
import {Link,withRouter}from 'react-router-dom';
export class SideBar extends Component {

  sendContent = (e)=>{
  //  e.preventDefault();
   console.log("called",e.target.parentElement.id);
  //  this.props.setSidebarContent(e.target.parentElement.id);
  //  this.props.fetchContentFromSidebar(e.target.innerText);
}
  
  
   render() {
      return (
         <aside>
      <nav   className="sidebar d-flex flex-column navbar navbar-expand-lg navbar-light">
        
        <div   className="container-fluid justify-content-center">
         <button   className="navbar-toggler " id="sidebarbutton" type="button" data-toggle data-target="#sidebarnav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span   className="navbar-toggler-icon">
           </span></button>
        </div>
        <div   className="navitems collapse navbar-collapse " id="sidebarnav">
         <ul   className=" navitems-ul flex-column align-items-start navbar-nav">
           
            <li   onClick = {(e)=>this.sendContent(e)} id="Dashboard" className=" flex-row w-100 itemside active nav-item">
              <Link   to ="/" id="Dashboard"  className="d-flex justify-content-center  nav-link " href="google.com">Dashboard <span   className="sr-only">
                </span>
              </Link>
            </li>

           {/* <Link to ="/items"> */}
           <li   className="flex-row w-100  itemside nav-item accordion" id="accordionExample">
            <a   className="d-flex justify-content-center nav-link pr-0 pl-0 accordion" href="google.com" role="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
              Items DROPDOWn 
            </a>
            <div   className="  w-100 collapse" id="collapse1"  data-parent="#accordionExample" aria-labelledby="#accordionExample" aria-controls="collapse1">
              <a    onClick = {(e)=>this.sendContent(e)} id="product"  className="dropdown-item py-auto nav-link txt-center  " href="google.com">
               Items
               <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top">
                 <img src="plus.png" alt = 'wide.jpeg'   className="my-auto plusimg"   />
               </button>
              </a>
              <a    onClick = {(e)=>this.sendContent(e)} id="productgroup"  className="dropdown-item py-auto nav-link txt-center flex-grow-1 " href="google.com">
               Item Groups
               <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top">
                 <img src="plus.png" alt = 'wide.jpeg'  className="my-auto plusimg"   />
               </button>
              </a>
            </div>
           </li>
           {/* </Link> */}
           <li   onClick = {(e)=>this.sendContent(e)} id="customer"  className="d-flex justify-content-center flex-row w-100 navitemicon itemside nav-item">
            <Link  to ="/customer"  className="py-auto nav-link txt-center flex-grow-1 " href="google.com">Customers </Link>
            <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top"><img src="plus.png" alt = 'wide.jpeg'  className="my-auto plusimg"   /></button>
           </li>
           
           <li   onClick = {(e)=>this.sendContent(e)} id="salesorder"  className="d-flex justify-content-center flex-row w-100 navitemicon itemside nav-item">
           <Link to ="/SalesOrder"   className="py-auto nav-link txt-center flex-grow-1 " href="google.com">Sales Orders </Link>
            <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top"><img src="plus.png"  alt = 'wide.jpeg' className="my-auto plusimg"   /></button>
           </li>
           
           
           <li   onClick = {(e)=>this.sendContent(e)} id="invoice"  className="d-flex justify-content-center flex-row w-100 navitemicon itemside nav-item">
           <Link to ="/invoice"  className="py-auto nav-link txt-center flex-grow-1 " href="google.com">Invoices </Link>
            <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top"><img src="plus.png" alt = 'wide.jpeg'  className="my-auto plusimg"   /></button>
           </li>
           
          
           <li   onClick = {(e)=>this.sendContent(e)} id="vendor"  className="d-flex justify-content-center flex-row w-100 navitemicon itemside nav-item">
           <Link to ="/Vendor"   className="py-auto nav-link txt-center flex-grow-1 " href="google.com">Vendors  </Link>
            <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top"><img src="plus.png" alt = 'wide.jpeg'  className="my-auto plusimg"   /></button>
           </li>
          
           
           <li   onClick = {(e)=>this.sendContent(e)} id="purchaseorder"  className="d-flex justify-content-center flex-row w-100 navitemicon itemside nav-item">
           <Link to ="/PurchaseOrder"   className="py-auto nav-link txt-center flex-grow-1 " href="google.com">Purchase Orders </Link>
            <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top"><img src="plus.png"  alt = 'wide.jpeg' className="my-auto plusimg"   /></button>
           </li>
           
          
           <li   onClick = {(e)=>this.sendContent(e)} id="bill"  className="d-flex justify-content-center flex-row w-100 navitemicon itemside nav-item">
           <Link to ="/Bill"   className="py-auto nav-link txt-center flex-grow-1 " href="google.com">Bills </Link>
            <button   className="itemside btn boton" data-toggle="tooltip" data-placement="right" title="Tooltip on top"><img src="plus.png"  alt = 'wide.jpeg' className="my-auto plusimg"   /></button>
           </li>
           
         </ul>
        </div>
      </nav>
     </aside>
      )
   }
}


export default withRouter(SideBar)
