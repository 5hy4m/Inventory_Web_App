import React,{useContext} from 'react'
import {DetailsContext} from './Details'

function CustomerDetails() {
    const context = useContext(DetailsContext);
    console.log(context.list);

    function handleListClick(e){
        e.preventDefault()
        console.log(e.target.id);
        
        context.setDetail(parseInt(e.target.id))
    }

    return (
        <div className="nav detailslist scroll flex-column col-xl-2 col-md-2 col-sm-2 col-xs-2" >
            <div className="detlistHeader dropdown border-bottom d-flex h-10">
                Customer
            </div>
            {context.list.map((element,index)=>
                <div key={index} className="listViewinDetails d-flex font-weight-bold overflow-scroll ">
                    <a href="/" id = {element[context.content.pk]} onClick={handleListClick}>{element[context.content.name]}</a>
                </div>
            )}
            </div>
    )
}

export default CustomerDetails
