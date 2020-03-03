import React, { Component } from 'react'

import CustomerModel from './Modals/CustomerModel';
import SalesOrderModel from './Modals/SalesOrderModel';
import ItemModel from './Modals/ItemModel';
import VendorModel from './Modals/VendorModel';

import SideBar from './SideBar';
import Footer from  './Footer';
import TopNav from './TopNav';
import DashBoard from './Dashboard/DashBoard';
import Details from './Details/Details';
import Filter from './FunctionalFilter/Filter';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

export const ModelContext = React.createContext();

export class Transforming extends Component {
  constructor(props){
    super(props);
    this.state={
      content:"Dashboard"
    }
  }

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
                      <Route path="/customerDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"customer"}/></section >}/>
                      <Route path="/salesorderDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"salesorder"}/></section >}/>
                      <Route path="/invoiceDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"invoice"}/></section >}/>
                      <Route path="/purchaseorderDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"purchaseorder"}/></section >}/>
                      <Route path="/billDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"bill"}/></section >}/>
                      <Route path="/vendorDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"vendor"}/></section >}/>
                      <Route path="/productDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"product"}/></section >}/>
                      
                      <Route path="/customer" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/product" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/salesorder" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/vendor" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/purchaseorder" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/bill" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/invoice" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/productgroup" render={(props) =><Filter {...props} filterType={props.match.path.slice(1)}/>}/>
                    {/* {this.content} */}
                    </Switch>
                  

                </div>

                {/* Bootstrap Models */}
                <ModelContext.Provider 
                    value = {{
                        // headers:this.state.headers,
                        // details:state.columns,
                        // searchbardata:(data)=>searchBarCallBack(data),
                        // query:state.query,
                        // searchColumn:state.searchColumn,
                        // sortdata:(data)=>sortinfoCallBack(data),
                        // sortColumn:state.sortColumn,
                        // loading:state.loading,
                        // error:state.error,
                        // content:props.filterType
                        }}>
                    <CustomerModel />
                    <ItemModel />
                    <SalesOrderModel />
                    <VendorModel/>
                    {/* <Route path="/salesorder" render={(props) =><EditSalesOrderModel {...props} />}/> */}
                </ModelContext.Provider>
              </div>
              <Footer />
            </div>
            </Router>
        )
    }
}



export default (Transforming);
