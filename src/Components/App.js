import React from 'react';
import ProductDetails from './ProductDetails';
import RecentlySold from './RecentlySold';
import RecentlyBought from './RecentlyBought';
import InventorySummary from './InventorySummary';
import '../css/App.css';
// 
// import TotalCard from './TotalCard';
// import Items from './Items';

class App extends React.Component {

  render(){
    return (       
      <div className = "flex-column w-100 m-0 jumbotron wrapper">
        <div className = "d-flex flex-fill flex-row">
          <ProductDetails />
          <RecentlySold />
        </div>
        <div className = "d-flex flex-row">
        <InventorySummary />
        <RecentlyBought />
        </div>
        </div>
      
      
  );
}}

export default App;


