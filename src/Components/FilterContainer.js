import React, { Component } from 'react'
// import axios from'axios';
import TableHeader from './TableHeader'
import TableBody from './TableBody'
export class FilterContainer extends Component {
    constructor(props){
        super(props);
        console.log("FILTERCONTAINER : ",this.props);
        this.state ={
            details : this.props.details,
            columns : this.props.columns,
        }
    }
      
// Getting and Setting Correct ID to Parent >> Filter.js
    filterDetails = (customer_id,e) =>{
        this.props.filterDetails({
            id:customer_id,
        })
    }

    render() {        
        if(this.state.loading === true){
            var render = 'rendering'  
        }
        else{
            render = this.state.details.map((customer) => <TableBody 
                key={customer.customer_id} 
                customer = {customer}
                selected = {this.filterDetails.bind(this,customer.customer_id)}
            />)
            console.log(render);
            
        }
        return (
            <div className="d-flex flex-column flex-fill justify-content-between">
                <table className="table d-flex flex-column table-hover  table-sm table-responsive w-100 m-0">
                <thead className="flex-fill  thead-dark">
                    <tr className="d-flex justify-content-between">
                    {this.state.columns.map((column,index) => <TableHeader 
                        key={index}
                        column={column}
                    />)}
                    {/* <th className="flex-fill" style={{textAlign: 'center'}}>Name <a href="google.com"><img className="sorticon" src="sort.png"  alt="wide.png" /> </a></th> */}
                    {/* <th className="flex-fill" style={{textAlign: 'center'}}>Phone Number <a href="google.com"><img className="sorticon" src="sort.png"  alt="wide.png" /> </a></th> */}
                    {/* <th className="flex-fill" style={{textAlign: 'center'}}>Email <a href="google.com"><img className="sorticon" src="sort.png"  alt="wide.png" /> </a></th> */}
                    {/* <th className="flex-fill" style={{textAlign: 'center'}}>Recievables <a href="google.com"><img className="sorticon" src="sort.png"  alt="wide.png" /> </a></th> */}
                    </tr>
                </thead>
                {/* Customer ROWS */}
                <tbody className="tabelbody flex-fill">    
                    {render}
                </tbody>
                </table>
            </div>
        )
    }
}

export default FilterContainer
