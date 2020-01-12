import React from 'react';
import axios from 'axios';
import '../css/ProductDetails.css'

class ProductDetails extends React.Component {
    constructor(){
            super();
            // console.log("Constructor",this);
            this.state = {products : [],
                          groups : [],
            };
          }
        
        componentDidMount() {
            axios.get("http://127.0.0.1:8000/product/").then(function(response){
                    var data = response.data;
                    console.log("RESPONSE",data);
                    this.setState({products:data,});     
                }.bind(this));
               
            axios.get("http://127.0.0.1:8000/productgroup/").then(function(response){
                  var data = response.data;
                  console.log("RESPONSE",data);
                  this.setState({groups:data,});     
              }.bind(this));
            
          }




    render(){
        
        return(
            <div className="card d-flex m-2" style={{width: '18rem'}}>
        <div className="card-body shadow rounded">
          <h2 className="card-title">Product Details</h2>
          <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h5 className = "font-weight-bolder text-wrap cardkey">All Items</h5>
          <h2 className = "cardvalue">{this.state.products.length}</h2> 
        </li>
        <li className="list-group-item">
          <h5 className = "font-weight-bolder text-wrap cardkey">All Item Groups</h5>
          <h2 className = "cardvalue">{this.state.groups.length}</h2> 
        </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <p className="card-text"></p>
        </div>
      </div>
        );
    }
}

export default ProductDetails;