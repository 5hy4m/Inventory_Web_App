import React,{useContext} from 'react'
import {DetailsContext} from './Details'

function DetailsList() {
    const context = useContext(DetailsContext);
    // console.log(context);

    return (
        <div className="nav customerbar scroll flex-column col-xl-2 col-md-2 col-sm-2 col-xs-2" >
            <div className="detlistHeader dropdown border-bottom d-flex h-10">
                CUSTOMERS
            </div>
            {context.list.map((element,index)=>
                <div key={index} className="listViewinDetails d-flex font-weight-bold overflow-scroll ">
                    <a id = {element.customer_id} onClick={context.setDetail}>{element.customer_name}</a>
                </div>
            )}
            </div>
    )
}

export default DetailsList
