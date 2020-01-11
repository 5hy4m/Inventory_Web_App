import React from 'react';
// import axios from 'axios';
// import TotalCard from './TotalCard';
// import Items from './Items';

class App extends React.Component {
  constructor(){
    super();
    console.log("Constructor",this);
    
    this.state = {products : [],
                  content:'TotalCard'
    };
  }

// componentDidMount() {
//     axios.get("http://127.0.0.1:8000/Product").then(function(response){
//             var data = response.data[0];
//             console.log(this,"RESPONSE",data);
//             this.setState({products:[data],
//             });     
//         }.bind(this));  
//   }

  render(){
    // let content;
    // if (this.state.content === 'Items'){
    //   console.log('contentsetting',this);
    //   content = <Items props={this.state.products.length}/>
    // }else if (this.state.content === 'TotalCard'){
    //   console.log('contentsetting',this.state.products);
    //   content = <TotalCard length={this.state.products.length}/>
    // }

    let styles = {
      border:"solid black 2px",
    }
    return (       
      <div className = "d-flex flex-column wrapper" style = {styles}>
      GOGLE</div>
  );
}}

export default App;


