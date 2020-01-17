import React, { Component } from 'react'

export class TableHeader extends Component {

    constructor(props){
        super(props);
        this.tableHeader = <th className="flex-fill" style={{textAlign: 'center'}}>{this.props.column} <a href="google.com"><img className="sorticon" src="sort.png"  alt="wide.png" /> </a></th>;
    }

    render() {
        return this.tableHeader
    }
}

export default TableHeader

