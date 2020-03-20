import React,{useState,useRef} from 'react';
import '../../css/modal.css'
import djangoInventory from '../../api/djangoInventory'

function CustomerModel(props) {
const[salutation,setSalutation] = useState('mr')
const[name,setName]= useState('')
const [recievables,setRecievables]= useState('')
const [remarks,setRemarks]= useState('')
const [phone_no,setPhone_no] = useState('')
const [email,setEmail] = useState('')

const salutationRef = useRef(null) 
const nameRef = useRef(null) 
const recievablesRef = useRef(null) 
const remarksRef = useRef(null) 
const phone_noRef = useRef(null) 
const emailRef = useRef(null) 


function handleSalutation(){
  setSalutation(salutationRef.current.value)
}

function handleName() {
  console.log(nameRef);
  
  setName(nameRef.current.value)
}

function handleRecievables() {
  setRecievables(recievablesRef.current.value)
}

function handlePhone_no(){
  setPhone_no(phone_noRef.current.value)
}

function handleEmail(){
  setEmail(emailRef.current.value)
}

function handleRemarks(){
  setRemarks(remarksRef.current.value)
}

function handleSubmit(){
  const data={
    salutation,
    customer_name:name ,
    recievables,
    remarks ,
    phone_no  ,
    email ,
  }
  djangoInventory.post('http://127.0.0.1:8000/customer/',data)
  .then((response)=>{
    alert('New Customer has been created')
    reset();
    console.log(response.data)
    props.setDetail(response.data)
  }).catch((error)=>{
    alert("An error occured Cannot create New Customer")
    console.log(error.response);
    
  })

}

function reset(){
  setSalutation('mr')
  setName('')
  setRecievables('')
  setRemarks('')
  setPhone_no('')
  setEmail('')
}
  return (
    <div className="modal fade newcustomer-modal-xl" id="newcustomer" tabIndex={-1} role="dialog" aria-labelledby="newcustomerLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
      <div className="modal-content container-fluid">
          <div className="modal-header">
            <h5 className="modal-title" id="newitemLabel">Add New CUSTOMER</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form className="jumbotron">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <select ref={salutationRef} value={salutation} onChange={handleSalutation} className="form-control shadow rounded" id="sel1">
                  <option value={'mr'} >mr</option>
                  <option value={'mrs'} >mrs</option>
                  <option value={'ms'} >ms</option>
                  <option value={'miss'}>miss</option>
                  <option value={'dr'} >dr</option>
                </select>
            </div>     
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input ref={nameRef} onChange={handleName}  type="text" id="name" className="form-control shadow rounded" placeholder="customer name" />
            </div>
              <div className = " form-group">
                <label htmlFor="quantity">Phone Number</label>
                <input ref={phone_noRef} onChange={handlePhone_no} value={phone_no} type="text" className="form-control shadow rounded" id="" placeholder="phone no" />
              </div>
              <div className="form-group">
                <label htmlFor="unit">Email</label>
                <input ref={emailRef} onChange={handleEmail} value={email} type="text" className="form-control shadow rounded" placeholder="Customer Email" id="Unit" />
              </div>
              
              <div className="form-group">
                <label htmlFor="unit">Recievables</label>
                <input ref={recievablesRef} onChange={handleRecievables} value={recievables} type="text" className="form-control shadow rounded" placeholder="Outstanding Recievables" id="Unit" />
              </div>            
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">  
              <div className="form-group">
              <label  htmlFor="comment">Remarks</label>
              <textarea ref={remarksRef} onChange={handleRemarks} value={remarks}  type="text" className="form-control shadow rounded" placeholder="Customer Remarks" rows="5" id="comment" />
            </div>
          </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={handleSubmit} className="btn buttonmodal">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerModel



