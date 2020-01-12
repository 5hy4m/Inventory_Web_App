import React, { Component } from 'react'

export class InvoiceModel extends Component {
    render() {
        return (
            <div className="modal fade newinvoice-modal-xl" id="newinvoice" tabIndex={-1} role="dialog" aria-labelledby="newinvoiceLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newinvoiceLabel">Add New Invoice</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

export default InvoiceModel
