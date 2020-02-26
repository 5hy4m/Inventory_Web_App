import React from 'react';
import '../../css/modal.css'

function CustomerModel() {
  return (
    <div className="modal fade newcustomer-modal-xl" id="newcustomer" tabIndex={-1} role="dialog" aria-labelledby="newcustomerLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content container-fluid">
          <div className="modal-header">
            <h5 className="modal-title" id="newitemLabel">Add New CUSTOMER</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form className="jumbotron">
          <div className=" form-row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <select className="form-control shadow rounded" id="sel1">
                  <option>mr</option>
                  <option>mrs</option>
                  <option>ms</option>
                  <option>miss</option>
                  <option>dr</option>
                </select>
                </div>
              </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">  
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control shadow rounded" placeholder="customer name" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className = " form-group">
                <label htmlFor="quantity">Phone Number</label>
                <input type="text" className="form-control shadow rounded" id="quantity" placeholder="phone no" />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="form-group">
                <label htmlFor="unit">Email</label>
                <input type="text" className="form-control shadow rounded" placeholder="Customer Email" id="Unit" />
              </div>
              
              <div className="form-group">
                <label htmlFor="unit">Recievables</label>
                <input type="text" className="form-control shadow rounded" placeholder="Outstanding Recievables" id="Unit" />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">  
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
      </div>
    </div>
  )
}

export default CustomerModel



