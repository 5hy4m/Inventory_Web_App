import React,{useContext,useState,useEffect} from 'react';
import {Context} from './Filter';
import { RectGraduallyShowLoading } from 'react-loadingg';


function TableBody() {
const context = useContext(Context);
const [tablebody,setTableBody] = useState( <tr><td></td></tr>);

// actual filtering process takes place here
function filtering(detail){
  // console.log(detail);
  // console.log(context);
  
if(isNaN(context.searchColumn.fname !== "" && detail[context.searchColumn.bname])){
  return detail[context.searchColumn.bname].toUpperCase().indexOf(context.query.toUpperCase()) !== -1;
}else if (context.searchColumn.fname !== ""){
  return String(detail[context.searchColumn.bname]).indexOf(context.query) !== -1; 
}}
console.log(context.details);

var filteredDetails = context.details.filter((detail)=>filtering(detail));

// Sorter Will sort the list according to given type of sorting
function sorter(list,type){
  return list.sort(function(a, b){
    if(isNaN(a[context.sortColumn.bname])){
      var nameA=a[context.sortColumn.bname].toLowerCase(), nameB=b[context.sortColumn.bname].toLowerCase()
      }
      else{
      nameA=a[context.sortColumn.bname]; nameB=b[context.sortColumn.bname];
      }
    if(type === true){
    if (nameA < nameB) //sort asc string ascending
        return -1 
    if (nameA > nameB)
        return 1
    }else{
      if (nameA > nameB) //sort desc string ascending
        return -1 
    if (nameA > nameB)
        return 1
    }
    return 0 //default return value (no sorting)
})
}

// List Builder helps to render elements 
function listBuilder(list){
  function builder(detail,index){
    console.log(detail.customer_id);
    // console.log(context.headers);
  
    const builder = <tr className = "d-flex justify-content-between" key={index} id = {index}>
    {context.headers.map((header,index)=><td key={index} className = "w-100 tablecell">{detail[header.bname]}</td>)}
      </tr>
    return builder
  }
    return list.map((detail,index) => builder(detail,index))
}


useEffect(()=>{
  if(context.loading){
    setTableBody(<tr className = "d-flex justify-content-between">
    <td className = "w-100 tablecell"><RectGraduallyShowLoading/></td>
    
  </tr>);
  }
  else if(context.error !== ''){ 
    setTableBody(<tr className = "d-flex justify-content-between">
                  <td className = "w-100 tablecell">{context.error}</td>
                </tr>);
  }else{
    setTableBody(listBuilder(filteredDetails));
  }
  // SORTING
  // IF Context.sortColumn is undefined and ascending
if(context.sortColumn && context.sortColumn.asc){
    // console.log("SORTDATA : ",context.sortColumn);
    var sortedbody = sorter(filteredDetails,context.sortColumn.asc);
  // setting the State
  setTableBody(listBuilder(sortedbody))
}
// IF Context.sortColumn is undefined and descending
else if(context.sortColumn && !context.sortColumn.asc){ 
    sortedbody = sorter(filteredDetails,context.sortColumn.asc)
  // setting the State
  setTableBody(listBuilder(sortedbody))
}
  
},[context]);

  // console.log(tablebody);
  
    return (
        <tbody className="tabelbody flex-fill">
            {tablebody}
       </tbody>
    )
}


export default TableBody
