import React, { Component } from 'react'

export class TableBody extends Component {
    constructor(props){
        super(props);
        // this.TableBody =<tr className = "d-flex justify-content-between"> 
        //                     <td className = "w-100 tablecell" onClick={console.log("selected")}>  {this.props.customer.customer_name}</td>
        //                     <td className = "w-100 tablecell" >  {this.props.customer.phone_no}</td>
        //                     <td className = "w-100 tablecell" >  {this.props.customer.email}</td>
        //                     <td className = "w-100 tablecell" >  {this.props.customer.outstanding_recievables}</td>
        //                 </tr>    
            this.TableBody=React.createElement('tr',{onClick:this.props.selected, className:"d-flex justify-content-between"},
            React.createElement('td', {className:"w-100 tablecell"}, this.props.customer.customer_name),
            React.createElement('td', {className:"w-100 tablecell"}, this.props.customer.phone_no),
            React.createElement('td', {className:"w-100 tablecell"}, this.props.customer.email),
            React.createElement('td', {className:"w-100 tablecell"}, this.props.customer.outstanding_recievables),)   
}
    render() {
        return (this.TableBody);
    }
}

export default TableBody
