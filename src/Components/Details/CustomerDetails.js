import React from 'react'

function CustomerDetails() {
    return (
        <div className="displaydetails d-flex flex-column col-xl-10 col-md-10 col-sm-10 col-xs-10">
        <div className="detailsHeader d-flex flex-column">
            {/* NavBar */}
            <nav className="navbar bg-transparent detailsnavbar navbar-expand-lg navbar-light bg-light">
              <p className="navbar-brand font-weight-bold" style={{color:'rgb(236, 0, 140)'}} href="awdawd.com">Sales Order</p>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="ml-auto navbar-nav ">
                  <li  className="nav-item mr-2">
                    <button  data-toggle="modal" data-target=".newinvoice-modal-lg" className="outlinebutton mt-1 btn btn-sm py-1 " href="google.com">
                      Edit
                    </button>
                  </li>
                  <li id='convert' className="nav-item mr-2">
                    <button id="outlinebutton" data-toggle="modal" data-target=".newinvoice-modal-lg" className=" mt-1 btn btn-sm py-1 " href="google.com">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <form className="">
          <div className=" form-row">
                <div className="col-lg-4 col-md-9 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <label htmlFor="name">Salutation</label>
                        <input className="form-control shadow rounded"></input>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control shadow rounded" placeholder="customer name" />
                    </div>
                </div>
            </div>
            
          <div className="form-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className = "form-group">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" className="form-control shadow rounded" id="" placeholder="phone no" />
                </div>
              <div className="form-group">
                <label htmlFor="unit">Email</label>
                <input type="text" className="form-control shadow rounded" placeholder="Customer Email" id="Unit" />
              </div>
              
              <div className="form-group">
                <label htmlFor="unit">Recievables</label>
                <input type="text" className="form-control shadow rounded" placeholder="Outstanding Recievables" id="Unit" />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">  
              <div className="form-group">
              <label  htmlFor="comment">Remarks</label>
              <textarea type="text" className="form-control shadow rounded" placeholder="Customer Remarks" rows="5" id="comment" />
            </div>

            
          </div>
          </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn buttonmodal">Save changes</button>
            </div>
          </form>
          </div>
        

    )
}

export default CustomerDetails