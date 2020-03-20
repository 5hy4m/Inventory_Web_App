import React, { Component } from 'react'

import CustomerModel from './Modals/CustomerModel';
import SalesOrderModel from './Modals/SalesOrderModel';
import ItemModel from './Modals/ItemModel';
import VendorModel from './Modals/VendorModel';
import InvoiceModel from './Modals/InvoiceModel';
import PurchaseOrderModel from './Modals/PurchaseOrderModel';

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
      detail:{}
    }
    this.setDetail = this.setDetail.bind(this)
  }

  setDetail(data){
    this.setState({
      detail:data
    })
  }

  setList(data){
    console.log("SetLIST : ",data);
    
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
                    <ModelContext.Provider 
                    value = {{
                        setDetail:this.setDetail,
                        setList:this.setList,
                        }}
                        >
                      <Route path="/" exact render={()=><section name="content" className="d-flex  w-100"><DashBoard/></section >}/>
                      <Route path="/customerDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"customer"}/></section >}/>
                      <Route path="/salesorderDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props}  filterType={"salesorder"}/></section >}/>
                      <Route path="/invoiceDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"invoice"}/></section >}/>
                      <Route path="/purchaseorderDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"purchaseorder"}/></section >}/>
                      <Route path="/billDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"bill"}/></section >}/>
                      <Route path="/vendorDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"vendor"}/></section >}/>
                      <Route path="/productDetails" render={(props) =><section name="content" className="d-flex  w-100"><Details {...props} filterType={"product"}/></section >}/>                      
                      

                      <Route path="/customer" render={(props) =><Filter {...props} setDetail={this.setDetail} detail={this.state.detail} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/product" render={(props) =><Filter {...props} setDetail={this.setDetail}  detail={this.state.detail} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/salesorder" render={(props) =><Filter {...props} setDetail={this.setDetail} detail={this.state.detail}  filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/vendor" render={(props) =><Filter {...props} setDetail={this.setDetail} detail={this.state.detail}  setDetail={this.setDetail}  filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/purchaseorder" render={(props) =><Filter {...props} setDetail={this.setDetail}  detail={this.state.detail}  filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/bill" render={(props) =><Filter {...props} setDetail={this.setDetail}  detail={this.state.detail}  filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/invoice" render={(props) =><Filter {...props}  setDetail={this.setDetail}  detail={this.state.detail} filterType={props.match.path.slice(1)}/>}/>
                      <Route path="/productgroup" render={(props) =><Filter {...props}  setDetail={this.setDetail}  detail={this.state.detail} filterType={props.match.path.slice(1)}/>}/>
                    {/* {this.content} */}

                {/* Bootstrap Models */}
                
                    <CustomerModel  setDetail={this.setDetail} />
                    <ItemModel  setDetail={this.setDetail} />
                    <SalesOrderModel  setDetail={this.setDetail}/>
                    <VendorModel  setDetail={this.setDetail}/>
                    <InvoiceModel setDetail={this.setDetail}/>
                    <PurchaseOrderModel/>
                    {/* <Route path="/salesorder" render={(props) =><EditSalesOrderModel {...props} />}/> */}
                    </ModelContext.Provider>
                </Switch>
                
              </div>
              <Footer />
            </div>
            
            </div>
            </Router>
        )
    }
}



export default (Transforming);
