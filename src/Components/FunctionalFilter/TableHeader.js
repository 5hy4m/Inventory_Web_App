import React,{useContext,useState} from 'react';
import { RectGraduallyShowLoading } from 'react-loadingg';
import {Context} from './Filter';

function TableHeader() {
    const context = useContext(Context);
    const [toggleSort,setToggle]=useState(false);
    // console.log(context);
    var fname=[];
    context.headers.forEach(header => {
        fname.push(header.fname)
    });


function handleSorting(e){
    e.preventDefault();
    setToggle(!toggleSort);
    context.sortdata({
        bname:context.headers[e.target.id].bname,
        fname:context.headers[e.target.id].fname,
        asc:toggleSort,
    })
}

    if(context.loading){
        var tableHeader =   <th className="flex-fill"  style={{textAlign: 'center'}}>
                                 <RectGraduallyShowLoading />
                                <a href="google.com">
                                    <img className="sorticon"  src="sort.png"  alt="wide.png" /> 
                                </a>
                            </th>;
        }else if(context.error !== ''){ 
            tableHeader =   <th className="flex-fill"  style={{textAlign: 'center'}}>
                                 {context.error}
                                <a href="google.com">
                                    <img className="sorticon"  src="sort.png"  alt="wide.png" /> 
                                </a>
                            </th>;
        }else{
            tableHeader = fname.map((column,index) =><th key={index}  className="flex-fill"  style={{textAlign: 'center'}}>
                {column} 
            <a href="google.com">
                <img className="sorticon" onClick={(e)=>handleSorting(e)} id={index} src="sort.png" name={column}  alt="wide.png" /> 
            </a>
            </th>);}
    // console.log(tableHeader);
            
    return (<tr className="d-flex justify-content-between">
                {tableHeader}
            </tr>)
}

export default TableHeader
