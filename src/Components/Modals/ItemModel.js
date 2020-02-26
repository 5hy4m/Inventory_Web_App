import React from 'react'

function ItemModel() {
  return (
    <div className="modal fade newitem-modal-xl " id="newitem" tabIndex={-1} role="dialog" aria-labelledby="newitemLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl container-fluid" role="document">
        <div className="modal-content container-fluid">
          <div className="modal-header">
            <h5 className="modal-title" id="newitemLabel">Add New Item</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form className="jumbotron">
            <div className=" form-row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" className="form-control shadow rounded" placeholder="item name" />
              </div>
              <div className = " form-group">
                <label htmlFor="quantity">Item quantity</label>
                <input type="text" className="form-control shadow rounded" id="quantity" placeholder="item quantity" />
              </div>
              <div className="form-group">
                <label htmlFor="unit">Unit</label>
                <input type="text" className="form-control shadow rounded" id="Unit" />
              </div>
            </div>
              <div className = "col-lg-6 col-md-6 col-sm-6 col-xs-12 itemimg d-flex justify-content-center">
                <img src="item.jpeg" className="shadow rounded rounded mx-auto itemimg" alt="..." />
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

export default ItemModel

