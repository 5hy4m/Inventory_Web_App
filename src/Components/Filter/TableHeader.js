import React, { Component } from 'react';

export class TableHeader extends Component {

    constructor(props){
        super(props);
        // console.log(this.props);
        this.sortType="DESC";
        this.columnHeaders = ['Name','Phone no','Email','outstanding_recievables']
        
        // this.sendSortInfo = this.sendSortInfo.bind(this)
    }

    sendSortInfo(e){
        e.preventDefault();
        console.log(e.target);
        if (this.sortType === "DESC"){
        this.props.fetchSortInfoForFilter("ASC",e.target.name,this.props.columnDetails);
        this.sortType = "ASC"
        }else{
            this.props.fetchSortInfoForFilter("DESC",e.target.name,this.props.columnDetails);
            this.sortType = "DESC"
        }
    }


    render() {
        this.tableHeader =this.columnHeaders.map((column,index) => 
            <th key={index}  className="flex-fill"  style={{textAlign: 'center'}}>
                {column} 
            <a href="google.com">
                <img className="sorticon" onClick = {(e) => {this.sendSortInfo(e)}} src="sort.png" name={column}  alt="wide.png" /> 
            </a>
            </th>);
        return this.tableHeader
    }
}

export default (TableHeader);