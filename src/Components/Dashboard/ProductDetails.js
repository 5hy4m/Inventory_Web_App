import React from 'react';
import axios from 'axios';
import '../../css/ProductDetails.css'
import { BoxLoading } from 'react-loadingg';

class ProductDetails extends React.Component {
    constructor(){
            super();
            this.loading = true
            // console.log("Constructor",this);
            this.state = {
              products : [],
              groups : [],
              loading:true
            };
          }
        
        async componentDidMount() {
         await axios.get("http://127.0.0.1:8000/product/").then(response => {
          this.setState({
          loading:false,
          products:response.data,
        });
      });
        await axios.get("http://127.0.0.1:8000/productgroup/").then(response => {
        this.loading = false;  
        this.setState({
            loading:false,
            groups:response.data,
          });
        });
        }
              

    render(){
      // console.log(this.state.products.data);
      if(this.loading){
        var product = <BoxLoading color="black" size="default"/>
        var group = <BoxLoading color="black" />
      }
      else{
        // console.log(this.state.products);  
        product = this.state.products.length
        group = this.state.groups.length
      }
        return(
            <div className="card zoom shadow rounded m-2 col-xl-4 col-md-5 col-sm-12 col-11 p-0" style={{width: '18rem'}}>
              <div className="card-body">
                <h2 className="card-title">Product Details</h2>
                <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5 className = "font-weight-bolder text-wrap cardkey">All Items</h5>
                <h2 className = "cardvalue">
                  {product}
                </h2> 
              </li>
              <li className="list-group-item">
                <h5 className = "font-weight-bolder text-wrap cardkey">All Item Groups</h5>
                <h2 className = "cardvalue">{group}</h2> 
              </li>
                </ul>
                <p className="card-text"></p>
              </div>
           </div>
        );
    
  }
}

export default ProductDetails;