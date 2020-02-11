import React, { Component } from 'react'

import CustomerModel from './Modals/CustomerModel';
import InvoiceModel from './Modals/InvoiceModel';
import ItemModel from './Modals/ItemModel';

import SideBar from './SideBar';
import Footer from  './Footer';
import TopNav from './TopNav';
import DashBoard from './Dashboard/DashBoard';
import Details from './Details/Details';
// import Filter from './Filter/Filter';
import Filter from './FunctionalFilter/Filter';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

export class Transforming extends Component {
  constructor(props){
    super(props);
    this.state={
      content:"Dashboard"
    }
    // this.setSidebarContent = this.setSidebarContent.bind(this)
  }
  //  setSidebarContent(data){
  //   this.setState({
  //     content:data
  //   })
  // }
    render() { 
      
        return (
          <Router>          
                      <div>
                      {/* TopNav */}
                      <TopNav />
              <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    {/* SIDEBAR */}
                    
                  <SideBar setSidebarContent = {this.setSidebarContent}/>
                    <Switch>
                      <Route path="/" exact render={()=><section name="content" className="d-flex  w-100"><DashBoard/></section >}/>
                      <Route  path="/CustomerDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"CustomerDetails"}/></section >}/>
                      <Route  path="/customer" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route  path="/salesorder" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route  path="/vendor" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route  path="/purchaseorder" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route  path="/bill" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route  path="/invoice" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route  path="/product" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                    {/* {this.content}  */}
                    </Switch>
                  

                </div>

                {/* Bootstrap Models */}
                <CustomerModel />
                <ItemModel />
                <InvoiceModel />
              </div>
              <Footer />
            </div>
            </Router>
        )
    }
}



export default (Transforming);
