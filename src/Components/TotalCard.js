import React from 'react'
// import ReactDOM from 'react-dom';
// import axios from 'axios'

class TotalCard extends React.Component{
    render(props){

        console.log("TotalCard",this.props.props);
        
        return(
                    <div className="card">
                    <div className="card-body ">
                    <h5 className="card-title">Total Stocks In Inventory = {this.props.length}</h5>
                        <p className="card-text"></p>
                
                    </div>
                    </div>
    );
}}

export default TotalCard;