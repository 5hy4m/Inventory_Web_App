import React,{useContext} from 'react'
import { BoxLoading } from 'react-loadingg';
import {Context} from './Filter';

function FilterBar(props) {
  // var searchColumn = 0;
    const context = useContext(Context);
    function searchBar(e){
      context.searchbardata({
                        query:e.target.value,
                        searchColumn:context.searchColumn,
                      });
    }

    function handleSearchableColumns(e){
      e.preventDefault();
      console.log(e.target.id);
      // searchColumn = context.headers[e.target.id];
      console.log(context.details[e.target.id]);
      context.searchbardata({
        query:context.query,
        // searchColumn:e.target.id,
        searchColumn:context.headers[e.target.id]
      });
    }

    const button = <button id="outlinebutton" data-toggle="modal" data-target=".newinvoice-modal-xl" className=" mt-1 btn btn-sm py-1 " href="google.com">
                          New <b> +</b>
                        </button>
    const menubar=<div className="dropdown-menu dropdown-menu-right" aria-labelledby="filterbarmenu">
                        <h6 className="dropdown-header">Sort By</h6>
                        <a className="dropdown-item" href="google.com">Name</a>
                        <a className="dropdown-item" href="google.com">Company Name</a>
                        <a className="dropdown-item" href="google.com">Recievables</a>
                      </div> ;
var fname=[];
context.headers.forEach(header => {
  fname.push(header.fname)
});

      if(context.loading){
        var searchableColumns = ()=>
          <a href="aa"
             className="dropdown-item">
                <BoxLoading/>
          </a>;
      }else if(context.error !== ''){
        searchableColumns =()=>
        <a href="aa"
           className="dropdown-item">
              <BoxLoading/>
        </a>;
      }else{
      searchableColumns = fname.map((header,index)=>  
        <a key={index}
         onClick={(e)=>handleSearchableColumns(e)}
          href="aa"
           className="dropdown-item"
            id={index}>
              {header}
        </a>
      );
      }
    return (
        <nav className=" flex-fill filterbar flex-column ">
            <div className="navbar p-0">
              <div className="nav-item dropdown">
                <button type="button outlinebutton" id="dropdowninfilterbar" className="filldropdown dropdown-toggle" data-toggle="dropdown">
                  All Customers
                </button>
                <div className="dropdown-menu ">
                  <a  className="dropdown-item" href="google.com">All {props.filterType}</a>
                  <a  className="dropdown-item" href="google.com">Paid {props.filterType}</a>
                  <a  className="dropdown-item" href="google.com">UnPaid {props.filterType}</a>
                </div>
              </div>
              <ul className=" navbar-nav flex-row ml-auto">
                {/* SearchBAr */}
                <li className = "input-group  mr-2 ">
                  <input className=" outlinebutton form-control tableBarSearchBox" onChange={(e)=>searchBar(e)} type="search" placeholder="Search" aria-label="Search" />
                  <div className="dropdown nav-item">
                    <button className="btn serachbutton outlinebutton dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" ></button>
                    <div className="dropdown-menu dropdown-menu-right"  aria-labelledby="dropdownMenuButton">
                      {searchableColumns}
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {button}
                </li>
                <li className="nav-item p-0">
                  <a className="nav-link p-0 dropdown" id="filterbarmenu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="google.com">
                    <img className="menuicon" src="dotted_burger.png"  alt="wide.png" />
                  </a> 
                  {menubar}
                </li>
                <div>
                </div>
              </ul>
            </div>
          </nav>
    )
}

export default FilterBar
