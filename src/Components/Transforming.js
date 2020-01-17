import React, { Component } from 'react'
import CustomerModel from './CustomerModel';
import InvoiceModel from './InvoiceModel';
import ItemModel from './ItemModel';
import SideBar from './SideBar';
import Footer from  './Footer';
import TopNav from './TopNav';
import DashBoard from './DashBoard';
import Details from './Details';
import Filter from './Filter';

export class Transforming extends Component {
  constructor(){
    super();
    this.state = {
      content : 'Dashboard'
    }
  }

setSidebarContent = (childData) => {
    this.setState({content: childData})
    console.log(childData);
}

setSectionContent = (childData) =>{
this.setState({
  content:'CustomerDetails',
})
}


    render() {
      switch(this.state.content) {
        case 'Dashboard':
          // console.log('content dec');
          this.display = <section name="content" className="d-flex  w-100"><DashBoard /></section >
          break;
        case 'CustomerDetails':
          // console.log('content dec');
          this.display = <section name="content" className="d-flex  w-100"><Details detailsType='CustomerDetails' /></section >
          break;
        case 'Customers':
          console.log('inside switch customers');
          this.display =<Filter setSectionContent={this.setSectionContent.bind(this)}  filterType = {'Customers'}/>
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
            <SideBar setSidebarContent = {this.setSidebarContent}/>
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
