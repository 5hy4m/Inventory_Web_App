import React, { Component } from 'react'
import CustomerModel from './CustomerModel';
import InvoiceModel from './InvoiceModel';
import ItemModel from './ItemModel';
import SideBar from './SideBar';
import Footer from  './Footer';
import TopNav from './TopNav';
import DashBoard from './DashBoard';
import CustomerDetails from './CustomerDetails';

export class Transforming extends Component {
  constructor(){
    super();
    this.state = {
      content : 'Dashboard'
    }
  }

  getContent = (childData) => {
    this.setState({content: childData})
    console.log(childData);
}


    render() {
      switch(this.state.content) {
        case 'Dashboard':
          console.log('content dec');
          this.display = <section name="content" className="d-flex  w-100"><DashBoard /></section >
          break;
        case 'Customers':
          console.log('inside switch customers');
          this.display = <section className="d-flex w-100" id="CustomerDetails"> <CustomerDetails /> </section >
          break;
        default:
          // code block
      }
       
        return (
            <div>
                {/* TopNav */}
                <TopNav />
        <div className="d-flex flex-column">
          
          <div className="d-flex flex-row">
              {/* SIDEBAR */}
            <SideBar getcontent = {this.getContent}/>
            {/* ReacT Components */}
            {this.display} 
            {/* <section className="  w-100" id="SalesOrderDetails" /> */}
          </div>
          {/* Bootstrap Models */}
          <CustomerModel />
          <ItemModel />
          <InvoiceModel />
        </div>
        <Footer />
      </div>
        )
    }
}

export default Transforming
