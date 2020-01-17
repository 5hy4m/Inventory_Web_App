import React, { Component } from 'react'
import '../css/Filter.css'
import FilterBar from  './FilterBar'
import FilterContainer from  './FilterContainer'
import axios from 'axios'
import { BoxLoading } from 'react-loadingg';


export class Filter extends Component {
    constructor(props){
        super(props);
        // this.filter = this.getFilterProps(this.props.filter)
        this.state = {
            columns: 'loading',
            details: 'loading',
        }
        this.getFilterProps = this.getFilterProps.bind(this);
    }

    async componentDidMount(){
        this.filter = await this.getFilterProps(this.props.filterType);
        this.setState({
            columns: this.filter.columns,
            details: this.filter.details,
        })
    }

    async getFilterProps(filter){
        this.filter_props = {
            Customers:{
                columns:['Name','Phone Number','Email','Recievables'],
                details: await axios.get("http://127.0.0.1:8000/customer/").then(response => {
                    console.log('RESPONSE :',response.data);
                    return response.data;
                })
            }
        }
        return this.filter_props[filter]
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

    render() {
        // console.log('COLUMNS : ',this.state.columns);
        if(this.state.details === 'loading'){
            var render = <BoxLoading/>
        }else{
            render = <FilterContainer 
                        columns = {this.state.columns} 
                        details = {this.state.details}
                        // getCustomers={this.getCustomers.bind(this)} 
                        filterDetails={this.filterDetails.bind(this)} // It as the selected id
                     />
        }

        return (
            <section className="d-flex flex-column w-100">
  {/* filterbar */}
            <FilterBar />
  {/* FilterContainer */}
            {render}

            </section >
        )
    }
}

export default Filter
