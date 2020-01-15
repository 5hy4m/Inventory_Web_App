import React from 'react';
import ProductDetails from './ProductDetails';
import RecentlySold from './RecentlySold';
import RecentlyBought from './RecentlyBought';
import InventorySummary from './InventorySummary';
import '../css/App.css';

// import TotalCard from './TotalCard';
// import Items from './Items';

class DashBoard extends React.Component {
  constructor(){
    super();
    // console.log("Constructor",this);
    this.state = {loading:true,
                  products : [],
                  groups : [],
    };
  }

// componentDidMount() {
//     axios.get("http://127.0.0.1:8000/product/").then(function(response){
//             var data = response.data;
//             console.log("RESPONSE",data);
//             this.setState({products:data,loading:false});
//         }.bind(this));
       
//     axios.get("http://127.0.0.1:8000/productgroup/").then(function(response){
//           var data = response.data;
//           console.log("RESPONSE",data,);
//       }.bind(this));
    
//   }
  
  render(){
    return (       
      <div className = "flex-column w-100 m-0 jumbotron wrapper">
        <div className = "row">
          <ProductDetails />
          <RecentlySold />
        </div>
        <div className = "row">
          <InventorySummary />
          <RecentlyBought />
        </div>
      </div>
      
      
  );
}}

export default DashBoard;


