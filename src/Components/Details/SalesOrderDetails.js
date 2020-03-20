import React,{useContext,useEffect,useState,useRef} from 'react'
import {DetailsContext} from './Details'
import '../../css/DetailsDisplay.css'
import axios from 'axios'
import djangoInventory from '../../api/djangoInventory';
import EditTable from '../Modals/EditTable';
// import {Link}from 'react-router-dom';

function SalesOrderDetails() {
  const context = useContext(DetailsContext);
  const [isedit,setEdit] = useState(false);
  const[name,setName] = useState(context.detail.customer_id)
  const [tabledata,setTableData] = useState(0);
  const[customers,setCustomers] = useState([])
  const[customernotes,setCustomerNotes] = useState('')
  const[tandc,setTandC] = useState('')
  const customernameRef = useRef(null)
  
  if(context.detail.sales_products){
  const product_ids = context.detail.sales_products.map((x)=> x.product_id);
  var product = []
  product_ids.forEach(element => {
          context.products.forEach(x=>{
            if(x.product_id === element){
              product.push(x)
            }
          })
        });              
  }
  
var customer_name = isedit ? customers.map((customer,index) => 
<option value={customer.customer_id} key={index}>{customer.customer_name}</option>) 
    : <option selected>{context.detail.customer_name}</option>

var table = isedit ? <EditTable isedit={isedit} tabledata={context.detail} setTableData={handleTabledata} items = {context.products}/>
: <div className="mb-1">
<table className="table formtable table-dark">
<thead>
  <tr>
    <th scope="col" id="itemdetails">ItemDetails</th>
    <th scope="col" id="quantity">Quantity</th>
    <th scope="col"id="rate">Rate</th>
    <th scope="col" id="discount">Discount</th>
    <th scope="col" id="amount">Amount</th>
  </tr>
</thead>
<tbody>
  {context.detail.sales_products.map((row,index)=>
  <tr key={index}>
    <td className=" formtablecell p-0">
      <div className="">
        <select   name='product_id' className="form-control formtablecell shadow rounded">
        <option selected disabled hidden> {product[index].product_name} </option>
          <option  className = 'formtableList'></option>
        </select>
        {/* textarea */}
        <textarea className = "textareafromtable" readOnly value={product[index].product_description}></textarea>
      </div>
    </td>
    {/* quantity */}
    <td id ="quantity" ><input type="text"  className="inputbox" data-placement="top" defaultValue={row.quantity} ></input><p><small></small></p></td>
    {/* rate */}  
    <td id ="rate"><input type="text" name='rate' defaultValue={row.rate}  className="inputbox" data-placement="top"  ></input></td>
    {/* discount */}
    <td className="d-flex align-content-start flex-wrap" style={{border:"none"}} id ="discount">
      <input defaultValue={row.discount_value} className="inputanddropbox" name='discount_value' data-placement="top"  ></input> 
      <button className="btn serachbutton modalbutton dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" ></button>
      <div name='discount_type'  className="dropdown-menu dropdown-menu-right"  aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item">%</a>
        <a  className="dropdown-item">rs</a>
      </div>  
    </td>
    {/* amount */}
    <td className='' id ="amount"><input value={row.amount} data-toggle="tooltip" data-placement="top" title='' className="inputanddropbox" readOnly></input>
      {/* <i onClick = {handleDeleteRow} id={index} className="far deleteButton fa-window-close" data-toggle="tooltip" data-placement="top" title="Click to DELETE row"></i> */}
    </td>
  </tr>
  )}
</tbody>
</table>
<div className='d-flex flex-row'>
<ul className="listamtdisp list-group">
  <li className="list-group-item">Sub Total<input className='subtotalinput' value={context.detail.subtotal} readOnly name='subtotal' ></input></li>
<li className="list-group-item">Adjustment
  <input  name='adjustment_value' readOnly value={context.detail.adjustment_value} className='subtotalinput'></input>
  <select   name='adjustment' className='selectadjustment' id="cars">
    <option value = '' selected disabled hidden>{context.detail.adjustment}</option>
    
  </select>
</li>
<li className="list-group-item">Total (Rs.)<input readOnly value={context.detail.total} name='total'className='subtotalinput'></input></li>
</ul> 
</div> 
</div>

var updatebutton = isedit ? <button type="button" onClick={handleUpdate} className="btn buttonmodal">Update</button> 
    : <div/>

var stickyinfo = isedit ? <div id='stickyeditinfo' className="d-flex align-items-center stickyeditinfo sticky-top visible"><div className="mx-auto font-weight-bold">*Please Calculate the Amount and then hit Submit<br/>*Please switch off edit mode to cancel the changes</div></div>
    : <div/>

function handleTandC(e){
  setTandC(e.target.value)
}

function sortTableData(obj){
  let arraydict = [];
  Object.keys(obj).sort().forEach((key,index)=>{
    const name = String(key);
    const value = obj[key];
    const dict = {}
    dict[name] = value
    arraydict.push(dict)      
  })
  return arraydict
}

useEffect(() => {
  let fetchCustomersource = axios.CancelToken.source();
  async function fetchCustomer(){
    await djangoInventory
    .get(`http://127.0.0.1:8000/customer/`,{cancelToken:fetchCustomersource.token})
    .then(async (response) =>{
      setCustomers(response.data)
    })
    .catch(error=>{           
      throw error;
    })
}

fetchCustomer();

  return () => {
    console.log('UNMOUNTING SalesOrderDetails');
    fetchCustomersource.cancel();
  };
},[])

function handleEdit(e){
  e.preventDefault();
  setEdit(!isedit);
}

function handleTabledata(e){
  setTableData(e);
  console.log('TABLE DATA : ',e);
}

function constructDict(qarray,parray,rarray,dtypearray,dvaluearray,avaluearray,){
  const dict=[]
  qarray.forEach(element => {
    dict.push({'quantity':Object.values(element)[0]});
  });
  parray.forEach((element,index) =>{
    dict[index]['product_id'] = Object.values(element)[0];
  });
  rarray.forEach((element,index) =>{
    dict[index]['rate'] = Object.values(element)[0];
  });
  dtypearray.forEach((element,index) =>{
    dict[index]['discount_type'] = Object.values(element)[0];
  });
  dvaluearray.forEach((element,index) =>{
    dict[index]['discount_value'] = Object.values(element)[0];
  });
  avaluearray.forEach((element,index) =>{
    dict[index]['amount'] = Object.values(element)[0];
  });
  return dict
}

// This will update the list which is shown in the frontend
function updateList(data){
  let updatedlist = []
  console.log(data);
  return updatedlist = context.list.map((item)=>{
    if(item.id === data.id){
      return data
    }
    else{
      return item
    }
  })
}

// this will delete the deleted data in the backend to show the changes in frontend we use this function

function deleteList(data){
  let deletedlist = []
  return deletedlist = context.list.filter((x)=>data.id !== x.id)
}

async function handleUpdate(e){
  if (tabledata === 0 || typeof(tabledata.qvalue)===undefined){
    console.log(tabledata);
    alert("Please Check the required fields and Calculate the total before hitting submit");
    return
  }

  const customer_id = parseInt(customernameRef.current.value);
  const terms_and_conditions = tandc;
  const customer_notes = customernotes;
  const sales_order_status  = 'draft';
  const amount              = tabledata.avalue;
  const quantity            = tabledata.qvalue;      
  const product_id          = tabledata.v;      
  const rate                = tabledata.rvalue;  
  const discount_type       = tabledata.dtype;
  const discount_value      = tabledata.dvalue;
  const adjustment          = tabledata.adjtype;
  const adjustment_value    = tabledata.adj;
  const total               = tabledata.tot;
  const subtotal            = tabledata.sub;
  const qarray = sortTableData(quantity);
  const parray =sortTableData(product_id);
  const rarray = sortTableData(rate);
  const dtypearray = sortTableData(discount_type);
  const dvaluearray = sortTableData(discount_value);
  const avaluearray = sortTableData(amount);
  console.log("parray : ",parray);
  
  const products = constructDict(qarray,parray,rarray,dtypearray,dvaluearray,avaluearray,);
  
  let data = {
    "sales_products": products,
    "sales_order_no": context.detail.sales_order_no,
    "sales_order_status": sales_order_status,
    "customer_notes": customer_notes,
    "terms_and_conditions": terms_and_conditions,
    "adjustment": adjustment,
    "adjustment_value": adjustment_value,
    "subtotal": subtotal,
    "total": total,
    "customer_id": customer_id,
};
console.log(data);

await axios.put(`http://127.0.0.1:8000/salesorder/${context.detail.id}/`,data)
.then(async response =>{
  console.log("SUCCESS : ",response.data);
  alert("The salesorder has been created successfully");
  context.setList(updateList(response.data))
  context.setDetail(response.data)
  setEdit(false)
})
.catch(error=>{
  alert("Cannot update this SalesOrder Please Verify the required fields");
  console.log(error.response)
});
e.preventDefault();
}

async function handleDelete(e){
  let lists = []
  console.log("handluing delete");
  await axios.delete(`http://127.0.0.1:8000/salesorder/${context.detail.id}/`)
  .then(async response =>{
    console.log("DELETED successfully: ",response.data);
    alert("The salesorder has been deleted successfully");
    context.setList(deleteList(context.detail));
    lists = context.list.filter((x)=>{
      return x.id !== context.detail.id
    });
    context.setDetail(lists[0])
    setEdit(false)
  })
  .catch(error=>{
    alert("Error while deleting");
    console.log(error.response)
  });
  e.preventDefault();
}

    
function handleCustomerNotes(e){
  setCustomerNotes(e.target.value)
}

function handleCustomerName(e){
  console.log("changing");
  setName(e.target.value);
}


    return (
        <div className="displaydetails d-flex flex-column col-xl-10 col-md-10 col-sm-10 col-xs-10">
          <div className="detailsHeader d-flex flex-column">
            {/* NavBar */}
            <nav className="navbar bg-transparent detailsnavbar navbar-expand-lg navbar-light bg-light">
              <p className="navbar-brand font-weight-bold" style={{color:'rgb(236, 0, 140)'}} href="awdawd.com">Sales Order</p>
              <div className="ml-auto navbar" id="navbarSupportedContent">
                <ul className="ml-auto navbar-nav ">
                  <li  className="nav-item mr-2">
                    <a  data-toggle="modal" onClick={handleEdit} className="outlinebutton mt-1 btn btn-sm py-1 " href="google.com">
                      Edit
                    </a>
                  </li>
                  <li id='delete' className="nav-item mr-2">
                    <button id="outlinebutton" data-toggle="modal" data-target=".newinvoice-modal-lg" className=" mt-1 btn btn-sm py-1 " href="google.com">
                      Convert
                    </button>
                  </li>
                  <li id='convert' className="nav-item mr-2">
                    <button onClick={handleDelete} id="outlinebutton" data-toggle="modal" data-target=".newinvoice-modal-lg" className=" mt-1 btn btn-sm py-1 " href="google.com">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <form className="">
              {stickyinfo}
              <div className='d-flex flex-column'> 
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                    <label htmlFor="name">Customer Name</label> 
                    <select ref={customernameRef} name='customername' className="form-control shadow rounded" id="sel1">
                    <option selected value={context.detail.customer_id}>{context.detail.customer_name}</option>
                    {customer_name}
                    </select>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                      <label htmlFor="name">Sales Order# </label>
                      <input value={context.detail.sales_order_no} disabled type="text" id="name" className="form-control shadow rounded"   placeholder="#" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className = " form-group">
                    <label htmlFor="SalesOrder Date">SalesOrder Date</label>
                    <input readOnly value={context.detail.sales_order_date} type="text" className="form-control shadow rounded" id="SalesOrder Date"  placeholder="SalesOrder Date" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label htmlFor="unit">Sales Order Status</label>
                    <input type="text" defaultValue={context.detail.sales_order_status} className="form-control shadow rounded" placeholder="Draft" id="Unit" />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                {/* TABLE */}
                {table}
          </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <div className="form-group">
                <label  htmlFor="comment">Customer Notes</label>
                <textarea name='customer_notes' onChange={handleCustomerNotes} defaultValue={context.detail.customer_notes} type="text" className="form-control shadow rounded" placeholder="Customer Remarks" rows="5" id="comment" ></textarea>
              </div>
            </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label  htmlFor="comment">Terms & Conditions</label>
                    <textarea type="text" onChange={handleTandC} name='terms_and_conditions' defaultValue={context.detail.terms_and_conditions} className="form-control shadow rounded" placeholder="Terms & Conditions" rows="5" id="comment" ></textarea>
                  </div>
              </div>            
                </div>
            <div className="modal-footer">
              {updatebutton}
            </div>
            </form>
        </div>
    )
}

export default SalesOrderDetails
