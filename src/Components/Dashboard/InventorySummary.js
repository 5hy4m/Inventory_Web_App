import React from 'react'
import '../../css/InventorySummary.css'

export class InventorySummary extends React.Component {
    render() {
        return (
            <div  className=" card zoom col-xl-4 col-md-5 col-sm-12 col-11 p-0 m-2" style={{width: '18rem',border: '0px'}}>
                <div className="card-body  shadow rounded">
                    <h3 className="card-title ">Inventory Summary</h3>
                    <ul id = "" className=" InventorySummary list-group list-group-flush">
                        <li className="list-group-item InventorySummary">
                            <h5 className = " font-weight-bolder text-wrap cardkey">Quantity In Hand</h5>
                            <h2 className = "cardvalue">0</h2> 
                        </li>
                        <li className="list-group-item InventorySummary" >
                            <h5 className = "font-weight-bolder text-wrap cardkey">Quantity To Be Recieved</h5>
                            <h2 className = "cardvalue">0</h2> 
                        </li>
                        </ul>
                    <p className="card-text"></p>
                </div>
      </div>
        )
    }
}

export default InventorySummary
