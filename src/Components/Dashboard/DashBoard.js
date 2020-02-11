import React from 'react';

import ProductDetails from './ProductDetails';
import RecentlySold from './RecentlySold';
import RecentlyBought from './RecentlyBought';
import InventorySummary from './InventorySummary';

import '../../css/App.css';
import '../../css/Dashboard.css'


class DashBoard extends React.Component {
  constructor(){
    super();
    // console.log("Constructor",this);
    this.state = {
      loading:true,
      products : [],
      groups : [],
    };
  }

  render(){
    // console.log(this.props);
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
}
}


export default (DashBoard);


