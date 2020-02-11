import React, { Component } from 'react'
// import axios from'axios';
import TableHeader from './TableHeader'
import TableBody from './TableBody'


export class FilterContainer extends Component {
    // constructor(props){
    //     super(props);
    //     // console.log("FILTERCONTAINER : ",this.props);
    // }

    render() {        
        return (
            <div className="d-flex flex-column flex-fill justify-content-between">
                <table className="table d-flex flex-column table-hover  table-sm table-responsive w-100 m-0">
                <thead className="flex-fill  thead-dark">
                    <tr className="d-flex justify-content-between">
                    {<TableHeader />}
                    </tr>
                </thead>
                {/* Customer ROWS */}
                <tbody className="tabelbody flex-fill">    
                    {<TableBody />}
                </tbody>
                </table>
            </div>
        )
    }
}



export default FilterContainer;
