import React, { Component } from 'react'
import '../../css/Filter.css'
import FilterBar from  './FilterBar'
import FilterContainer from  './FilterContainer'
// import axios from 'axios'
import { BoxLoading } from 'react-loadingg';


export class Filter extends Component {
    constructor(props){
        super(props);
        // this.filter = this.getFilterProps(this.props.filter)
        this.state = {
            loading:true,
        }
        // this.getFilterProps = this.getFilterProps.bind(this);
    }


    async componentDidMount(){
        this.setState({
            loading:false
        })      
        
    }

// Getting and Setting FILter details to Parent >> Transforming.js

    filterDetails(id){
        // console.log("FILTERDETAILS : ",childData.details);
        this.props.setSectionContent({
            id:id,
            details:this.state.details,
        });
    }

    getCustomers(childData){
        console.log("GetCustomers : ",childData);
        this.props.getFilterData(childData)
    }

// Setting Filter which was fetched from dropdown in filterbar. After Logics we have to that filtered details to FilterContainer.js
setFilterFromDropDown(childData){
        childData = childData.split(' ');
        if(childData[0]==='All'){
            // Write the Filtering logics
        }else if(childData[0] === 'Paid'){
            // Write the Filtering logics
        }else if(childData[0] === 'UnPaid'){
            // Write the Filtering logics
        }
    }

    setFilterFromButton(childData){
        var column = this.state.columns.filter(column => column===childData)
        // console.log("DETAILS : ",this.state.details);
        var copy = [...this.state.details];
        // console.log("COPY :",copy);
        copy = this.getSortedDetails(column,this.state.details)
        console.log("COPY :",copy);
        
    }

    

    render() {
        // console.log('COLUMNS : ',this.state.columns);
        if(this.state.loading){
            var filterContainer = <BoxLoading/>
        }else{filterContainer = <FilterContainer 
                        columns = {this.props.columns} 
                        details = {this.props.details}
                        // getCustomers={this.getCustomers.bind(this)} 
                        filterDetails={this.filterDetails.bind(this)} // It as the selected id
                     />}
        return (
            <section className="d-flex flex-column w-100">
  {/* filterbar */}
            <FilterBar setFilterFromButton={this.setFilterFromButton.bind(this)} setFilterFromDropDown={this.setFilterFromDropDown.bind(this)} filterType = {this.props.filterType} />
  {/* FilterContainer */}
            {filterContainer}

            </section >
        )
    }
}


export default (Filter);
