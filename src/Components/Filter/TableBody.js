import  { Component } from 'react'


export class TableBody extends Component {
    constructor(props){
        super(props);
        
        this.sortedDetails = []
        // this.TableBody =<tr className = "d-flex justify-content-between"> 
        //                     <td className = "w-100 tablecell" onClick={console.log("selected")}>  {this.props.customer.customer_name}</td>
        //                     <td className = "w-100 tablecell" >  {this.props.customer.phone_no}</td>
        //                     <td className = "w-100 tablecell" >  {this.props.customer.email}</td>
        //                     <td className = "w-100 tablecell" >  {this.props.customer.outstanding_recievables}</td>
        //                 </tr>    
        console.log(props)
    }

    // componentDidUpdate(pp,ps){
    //     console.warn(pp,ps);
        
    // }

    render() {      
    //     if(this.props.sortedDetails.length === 0){
    //         this.TableBody =  this.props.details.map((detail) => 
    //         React.createElement('tr',{key:detail.customer_id ,onClick:this.props.selected, className:"d-flex justify-content-between"},
    //         React.createElement('td', {className:"w-100 tablecell"}, detail.customer_name),
    //         React.createElement('td', {className:"w-100 tablecell"}, detail.phone_no),
    //         React.createElement('td', {className:"w-100 tablecell"}, detail.email),
    //         React.createElement('td', {className:"w-100 tablecell"}, detail.outstanding_recievables),)
    // );  
    //     }else{
    //         // console.log(this.props.sortedDetails);
    //     this.TableBody = this.props.sortedDetails.map((detail) => 
    //             React.createElement('tr',{key:detail.customer_id ,onClick:this.props.selected, className:"d-flex justify-content-between"},
    //             React.createElement('td', {className:"w-100 tablecell"}, detail.customer_name),
    //             React.createElement('td', {className:"w-100 tablecell"}, detail.phone_no),
    //             React.createElement('td', {className:"w-100 tablecell"}, detail.email),
    //             React.createElement('td', {className:"w-100 tablecell"}, detail.outstanding_recievables),)
    //     );  
    //     }
        return (this.sortedDetails);
    }
}


export default (TableBody);
