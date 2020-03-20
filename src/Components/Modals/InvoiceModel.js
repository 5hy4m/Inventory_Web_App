import React,{useEffect,useContext, useState} from 'react'
// import useFilter from '../Hooks/FilterHooks';
import djangoInventory from '../../api/djangoInventory';
import  '../../css/SOModel.css'
import axios from 'axios'
import Table from './Table'
import {DetailsContext} from '../Details/Details'

function InvoiceModel(props) {
  // console.log(props);
  const context = useContext(DetailsContext);
   // const[state,dispatch] = useFilter(defaultState);
  const[tabledata,setTableData] = useState(0);
  const[success,setSuccess] = useState(false);
  const[name,setName] = useState(-1)
  const[ordernumber,setOrderNumber] = useState('')
  const[customers,setCustomers] = useState([])
  const[items,setItems] = useState([])
  const[status,setStatus] = useState('draft')
  const[customerNotes,setCustomerNotes] = useState('')
  const[tandc,setTandC] = useState('')
  // to create a current date object
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

useEffect(()=>{
  let getNextInvoiceNumbersource = axios.CancelToken.source();

  let fetchCustomersource = axios.CancelToken.source();

  let fetchItemssource = axios.CancelToken.source();

async function getNextInvoiceNumberawait(){
    await djangoInventory
    .get(`http://127.0.0.1:8000/invoice/10/getNextInvoiceNumber/`,{cancelToken: getNextInvoiceNumbersource.token})
    .then((response) =>{
        console.log(response.data);
        setOrderNumber(response.data)
    })
    .catch(error=>{
        return{
            type:'FETCH_ERROR',
            payload:error.response,
        }
    })
}

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

async function fetchItems(){
  await djangoInventory
    .get(`http://127.0.0.1:8000/product/`,{cancelToken:fetchItemssource.token})
    .then( (response) =>{
        
      setItems(response.data)
      setName(response.data[0].product_id)
  })
  .catch(error=>{           
    throw error
  })
}
  fetchItems();
  fetchCustomer();
  getNextInvoiceNumberawait();

  return ()=>{
    console.log('UNMOUNTING');
    fetchItemssource.cancel();
    fetchCustomersource.cancel();
    getNextInvoiceNumbersource.cancel();
  }
},[])
  

function sortTableData(obj){
  let arraydict = [];
  // console.log(Object.keys(obj).sort());
  Object.keys(obj).sort().forEach((key,index)=>{
    const name = String(key);
    const value = obj[key];
    const dict = {}
    dict[name] = value
    arraydict.push(dict)      
  })
  return arraydict
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

function reset(){
  setTableData(0);
  document.getElementsByName('terms_and_conditions')[0].value = '';
  document.getElementsByName('customer_notes')[0].value = '';
}

function handleSubmit(e){
  console.log(customers);
  
  async function getNextInvoiceNumberawait(){
    await djangoInventory
    .get(`http://127.0.0.1:8000/invoice/10/getNextInvoiceNumber/`)
    .then((response) =>{
      console.log(response.data);
        setOrderNumber(response.data);
    })
    .catch(error=>{
        return{
            type:'FETCH_ERROR',
            payload:error,
        }
    })
  }
  
  if (tabledata === 0 || typeof(tabledata.qvalue)===undefined){
    console.log(tabledata);
    alert("Please Check the required fields and Calculate the total before hitting submit");
    return
  }
  const customer_id = name;
  const terms_and_conditions = tandc;
  const customer_notes = customerNotes;
  const invoice_status  = 'draft';
  const amount              = tabledata.avalue
  const quantity            = tabledata.qvalue       
  const product_id          = tabledata.value         
  const rate                = tabledata.rvalue    
  const discount_type       = tabledata.dtype 
  const discount_value      = tabledata.dvalue
  const adjustment          = tabledata.adjtype
  const adjustment_value    = tabledata.adj
  const total               = tabledata.subtot;
  const subtotal            = tabledata.tot;
  const qarray = sortTableData(quantity)
  const parray =sortTableData(product_id)
  const rarray = sortTableData(rate)
  const dtypearray = sortTableData(discount_type)
  const dvaluearray = sortTableData(discount_value)
  const avaluearray = sortTableData(amount)

  console.log(
    'quantity : ',qarray,
    'product_id : ',parray,
    'rate : ',rarray,
    'AMOUNT : ',avaluearray,
    'discount_type : ',dtypearray ,
    'discount_value : ',dvaluearray ,
    'adjustment : ',adjustment, 
    'adjustment_value :',adjustment_value,
    'total : ',total,
    'subtotal : ',subtotal,
    );
  
  
  const products = constructDict(qarray,parray,rarray,dtypearray,dvaluearray,avaluearray,);
  // console.log(sales_products);
  
    const data = {
        "invoice_products": products,
        "invoice_no": ordernumber,
        "invoice_status": invoice_status,
        "customer_notes": customer_notes,
        "terms_and_conditions": terms_and_conditions,
        "adjustment": adjustment,
        "adjustment_value": adjustment_value,
        "subtotal": subtotal,
        "total": total,
        "customer_id": customer_id,
    }

  console.log(data);
  
  djangoInventory.post('http://127.0.0.1:8000/invoice/',data)
  .then(async response =>{
    console.log("SUCCESS : ",response.data);
    alert("The invoice has been created successfully");
    
    setSuccess(true)
    reset();
    setSuccess(false)
    await getNextInvoiceNumberawait();
    props.setDetail(response.data)
    // context.setList([...context.list,[response.data]])
    return
  })
  .catch(error=>{
    alert("Cannot Save this invoice Please Verify the required fields");
    console.log(error.response)});
  e.preventDefault();
}

function handlecustomername(e){
  console.log(e.target.value);
  setName(e.target.value)
  // document.getElementsByName('customername')[0].id = e.target.value 
}

function handleTabledata(e){
  setTableData(e);
  console.log('TABLE DATA : ',e); 
}

function handleCustomerNotes(e){
  setCustomerNotes(e.target.value);
}

function handleTandC(e){
  setTandC(e.target.value)
}

  return (
    <div className="modal fade newInvoice-modal-lg" id="newInvoice" tabIndex={-1} role="dialog" aria-labelledby="newInvoiceLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content container-fluid">
          <div className="modal-header">
            <h5 className="modal-title" id="newInvoiceLabel">Add New Invoice</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form className="jumbotron">
          <div id='stickyinfo' className="d-flex align-items-center sticky sticky-top visible"><div className="mx-auto font-weight-bold">Please Calculate the Amount and then hit Submit</div></div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="form-group">
                <label htmlFor="name">Customer Name</label> 
                <select name='customername' onChange={handlecustomername} className="form-control shadow rounded" id="sel1">
                  {customers.map((customer,index) =>
                    <option value={customer.customer_id} key={index}>{customer.customer_name}</option>
                  )}
                </select>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="form-group">
                  <label htmlFor="name">Invoice Order# </label>
                  <input disabled type="text" id="name" className="form-control shadow rounded"  value={ordernumber} placeholder="#" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className = " form-group">
                <label htmlFor="Invoice Date">Invoice Date</label>
                <input  type="text" className="form-control shadow rounded" id="invoice Date" value={today} disabled placeholder="invoice Date" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="form-group">
                <label htmlFor="unit">invoice Status</label>
                <input type="text" className="form-control shadow rounded" placeholder="Draft" id="Unit" />
              </div>
            </div>  
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <Table reset={success} setTableData={handleTabledata} items = {items} />
              <div className="form-group">
              <label  htmlFor="comment">Customer Notes</label>
              <textarea name='customer_notes' value={customerNotes} onChange={handleCustomerNotes} type="text" className="form-control shadow rounded" placeholder="Customer Remarks" rows="5" id="comment" ></textarea>
            </div>
          </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="form-group">
              <label  htmlFor="comment">Terms & Conditions</label>
              <textarea type="text" value={tandc} onChange={handleTandC} name='terms_and_conditions' className="form-control shadow rounded" placeholder="Terms & Conditions" rows="5" id="comment" ></textarea>
            </div>
          </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={handleSubmit} className="btn buttonmodal">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      )
}

export default InvoiceModel
