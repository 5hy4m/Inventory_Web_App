import React,{useState,useEffect} from 'react'
import  '../../css/SOModel.css'
import '../../css/Table.css'

function Table(props) { 
    const[value,setValue] = useState({value0:0});
    const[qvalue,setQvalue] = useState({qvalue0:1.00});
    const[avalue,setAvalue] = useState({avalue0:0});
    const[dvalue,setDvalue] = useState({dvalue0:0});
    const[dtype,setDtype] = useState({dtype0:"%"});
    const[rvalue,setRvalue] = useState({rvalue0:0});
    const[description,setDescription]=useState('');
    const[row,setRow] = useState([0]);
    const[soh,setSoh] = useState("-"); // Stock On hand
    // const[nvalue,setName] = useState({nvalue0:'Select The Item'}); 
    const[subtot,setSubTot] = useState(0);
    const[tvalue,setTvalue] = useState(0);
    const[adjtype,setAdjType] = useState('');
    const[adj,setAdj] = useState(0)
    
    useEffect(()=>{
      if(props.reset === true){
        const len = Object.keys(value).length
        for (let i=0;i<len-1;i++){
          handleDeleteRow();
        }
        console.log('reseting');
        setValue({value0:0});
        setQvalue({qvalue0:1.00})
        setAvalue({avalue0:0})
        setDvalue({dvalue0:0})
        setDtype({dtype0:"%"})
        setRvalue({rvalue0:0})
        setDescription('')
        setRow([0])
        setSoh("-")
        setSubTot(0)
        setTvalue(0)
        setAdjType('')
        setAdj(0)
      }},[props.reset]);
    

function handleDvalueChange(e){
    // let tot = 0
    console.log('ID of row',e.target.id);
    const id = e.target.id
    const discount = e.target.value
    console.log(qvalue,rvalue,avalue,dvalue,value,description);
    
    setDvalue({...dvalue,[`dvalue${id}`]:discount})
    
    if (dtype[`dtype${id}`] === '%' && discount!==0){
      // console.log(rvalue,qvalue,rvalue);
      // avalue = qvalue*rvalue*(dvalue/100)
      setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`]) - (qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`]*(discount/100))})
    }else if(dtype[`dtype${id}`] === 'rs' && discount!==0){
      // avalue = qvalue*rvalue-dvalue
      setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`])-discount})
  }
    else{
      if(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`]-discount === NaN || discount === 0){
        setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`])})
        // avalue = (qvalue*rvalue)
        // avalue = 0
      }}
      // Object.keys(avalue).forEach((key,index)=>{
      //   tot = tot+avalue[key]
      // })
      // setSubTot(tot)
  }

function handleRvalueChange(e){
      const id = e.target.id
      const rate = e.target.value
      // let tot = 0
      setRvalue({...rvalue,[`rvalue${id}`]:rate})
      console.log("INDEX VALUE :" ,id);
      
      console.log(dvalue,qvalue,rvalue);
      if (dtype[`dtype${id}`] === '%' && dvalue[`dvalue${id}`]!==0){
        console.log(qvalue,avalue,rvalue);
        // avalue = qvalue*rvalue*(dvalue/100)
        setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rate) - (qvalue[`qvalue${id}`]*rate*(dvalue[`dvalue${id}`]/100))})
        // avalue = ((qvalue*rate) - (qvalue*rate*(dvalue/100)))
      }else if(dtype[`dtype${id}`] === 'rs' && dvalue[`dvalue${id}`]!==0){
        // avalue = qvalue*rvalue-dvalue
        setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rate)-dvalue[`dvalue${id}`]})
        // avalue = (qvalue*rate)-dvalue
    }
      else{
        if(qvalue[`qvalue${id}`]*rate-dvalue[`dvalue${id}`] === NaN || dvalue[`dvalue${id}`] === 0){
          setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rate)})
        }}
    }

function handleItemChange(e){
      console.log(e.target.id);
      var id = e.target.id

      const val = e.target.value
      const rate = props.items[e.target.value-1].selling_price;
      const descript = props.items[e.target.value-1].product_description;
      const discountType = '%';
      const quantity = 1;
      const discount = 0;
      // let tot = 0
      const stockonhand = props.items[e.target.value-1].stocks.quantity;
      setValue({...value,[`value${id}`]:val});    
      setDescription({...description,[`description${id}`]:descript});
      setRvalue({...rvalue,[`rvalue${id}`]:rate});
      setDvalue({...dvalue,[`dvalue${id}`]:discount});
      setDtype({...dtype,[`dtype${id}`]:discountType});
      setQvalue({...qvalue,[`qvalue${id}`]:quantity});
      setSoh({...soh,[`soh${id}`]:stockonhand});
      // setName({...name,[`name${id}`]:name});
             
      console.log(avalue,qvalue,rvalue,value)
      if (discountType === '%' && discount!==0){
   
        setAvalue({...avalue,[`avalue${id}`]:(quantity*rate) - (quantity*rate*(discount/100))})

      }else if(discountType === 'rs' && discount!==0){
        setAvalue({...avalue,[`avalue${id}`]:(quantity*rate)-discount})
    }
      else if(quantity*rate-discount === NaN || discount === 0){
          setAvalue({...avalue,[`avalue${id}`]:(quantity*rate)})
        }

    console.log(` Inside itemChange funtion Rate : ${rate} Quantity : ${qvalue[`qvalue${id}`]}`);
  }

function handleDtypeChange(e){
      // let tot = 0
      const id = e.target.id
      const discountType = e.target.name;
      setDtype({...dtype,[`dtype${id}`]:discountType});
      
      if (discountType === '%' && dvalue[`dvalue${id}`]!==0){
        console.log(qvalue,avalue,rvalue);
        // avalue = qvalue*rvalue*(dvalue/100)
        setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`]) - (qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`]*(dvalue[`dvalue${id}`]/100))})
        // avalue = ((qvalue*rvalue) - (qvalue*rvalue*(dvalue/100)))
      }else if(discountType === 'rs' && dvalue[`dvalue${id}`]!==0){
        // avalue = qvalue*rvalue-dvalue
        setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`])-dvalue[`dvalue${id}`]})
        // avalue = (qvalue*rvalue)-dvalue
}
      else if(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`]-dvalue[`dvalue${id}`] === NaN || dvalue[`dvalue${id}`] === 0){
          setAvalue({...avalue,[`avalue${id}`]:(qvalue[`qvalue${id}`]*rvalue[`rvalue${id}`])})
          // avalue = (qvalue*rvalue)
          // avalue = 0
        }
        // Object.keys(avalue).forEach((key,index)=>{
        //   tot = tot+avalue[key]
        // })
        // setSubTot(tot)
    }

function handleQvalueChange(e){
      // let tot = 0
      const id = e.target.id
      const quantity = e.target.value 
      console.log('setting values');
      console.log(id);
      
      if(quantity > soh[`soh${id}`]){
        alert("quantity value is greater that Stock on hand");
        return}

      setQvalue({...qvalue,[`qvalue${id}`]:quantity})
      console.log(qvalue,avalue,rvalue);
      if (dtype[`dtype${id}`] === '%' && dvalue[`dvalue${id}`]!==0){
        console.log(rvalue[`rvalue${id}`],qvalue[`qvalue${id}`],rvalue);
        // avalue = qvalue*rvalue*(dvalue/100)
        setAvalue({...avalue,[`avalue${id}`]:(quantity*rvalue[`rvalue${id}`]) - (quantity*rvalue[`rvalue${id}`]*(dvalue[`dvalue${id}`]/100))})
        // avalue = ((quantity*rvalue) - (quantity*rvalue*(dvalue/100)))
      }else if(dtype[`dtype${id}`] === 'rs' && dvalue[`dvalue${id}`]!==0){
        setAvalue({...avalue,[`avalue${id}`]:(quantity*rvalue[`rvalue${id}`])-dvalue[`dvalue${id}`]})
        // avalue = (quantity*rvalue)-dvalue
    }
      else{
        if(quantity*rvalue[`rvalue${id}`]-dvalue[`dvalue${id}`] === NaN || dvalue[`dvalue${id}`] === 0){
          setAvalue({...avalue,[`avalue${id}`]:(quantity*rvalue[`rvalue${id}`])})
        }}
  }

function handleDeleteRow(e,value){
    const rowid = row.length-1;
    if(rowid === 0){
      alert('CANNOT Delete the row')
    }
    
    row.pop()
    const updatedRow = [...row]
    delete description[`description${rowid}`]
    delete rvalue[`rvalue${rowid}`]
    delete qvalue[`qvalue${rowid}`]
    delete dvalue[`dvalue${rowid}`]
    delete dtype[`dtype${rowid}`]
    delete soh[`soh${rowid}`]
    delete avalue[`avalue${rowid}`]
    if(typeof value != "undefined" && value !== 'null'){
      console.log(value);
    delete value[`value${rowid}`]}
    else{
    console.log(value);
    
  }
  setRow(updatedRow);
    setAvalue({...avalue})
    setValue({...value})
    setSoh({...soh})
    setDtype({...dtype})
    setDvalue({...dvalue})
    setQvalue({...qvalue})
    setRvalue({...rvalue});
    setDescription({...description})
  }

function AddRow(e){
    // setValue({...value,[`value${e.target.id}`]:0})
    setRow([...row,(row[row.length - 1]+1)])
    }
  
function calculateSubtot(){
    let subtot = 0
    let tot = 0
    Object.keys(avalue).forEach((key,index)=>{
      subtot = parseFloat(subtot)+parseFloat(avalue[key])
    })
    setSubTot(subtot);
    if(adjtype === ''){
      tot=subtot;
      setTvalue(subtot);
    }else if(adjtype === '+'){
      tot=parseFloat(adj)+parseFloat(subtot);
      setTvalue(parseFloat(adj)+parseFloat(subtot));
    }else if(adjtype === '-'){
      tot=parseFloat(subtot)-parseFloat(adj);
      setTvalue(parseFloat(subtot)-parseFloat(adj));
    }
    props.setTableData({qvalue,rvalue,value,adj,adjtype,dvalue,avalue,dtype,subtot,tot});
    
  }

function handleAdjType(e){
  const adjustment = e.target.value;
  console.log(adjustment);
  setAdjType(adjustment)
}

function handleAdj(e){
  console.log(e.target.value);
  const val = e.target.value
  setAdj(val)
  // if(adjtype === ''){
  //   setTvalue(tvalue)
  // }else if(adjtype === '+'){
  //   setTvalue(parseFloat(adj)+parseFloat(tvalue))
  // }else if(adjtype === '-'){
  //   setTvalue(parseFloat(tvalue)-parseFloat(adj))
  // }
  console.log(tvalue);
}

return (
    <div className="mb-1">
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
            {row.map((x,index)=><tr id={index} key={index}>
              <td className=" formtablecell p-0">
                <div className="">
                  <select  id={x} name='product_id' onChange={(e)=>handleItemChange(e)} className="form-control formtablecell shadow rounded">
                  <option selected disabled hidden> Select the Item </option>
                    {props.items.map((item,index)=><option value={item.product_id} className = 'formtableList' key={index}>{item.product_name}</option>)}
                  </select>
                  {/* textarea */}
                  <textarea className = "textareafromtable" value={description[`description${index}`]}></textarea>
                </div>
              </td>
              {/* quantity */}
              <td id ="quantity" ><input type="text" value={qvalue[`qvalue${index}`]} name='quantity' id = {index} onChange={(e)=>handleQvalueChange(e)} className="inputbox" data-placement="top" title={qvalue[`qvalue${index}`]} ></input><p><small>stock on hand : {soh[`soh${index}`]}</small></p></td>
              {/* rate */}  
              <td id ="rate"><input type="text" name='rate' value={rvalue[`rvalue${index}`]} id = {index} onChange={(e)=>handleRvalueChange(e)} className="inputbox" data-placement="top" title={rvalue[`rvalue${index}`]} ></input></td>
              {/* discount */}
              <td className="d-flex align-content-start flex-wrap" style={{border:"none"}} id ="discount">
                <input className="inputanddropbox" name='discount_value' data-placement="top" title={dvalue[`dvalue${x}`]} onChange={(e)=>handleDvalueChange(e)} id = {x} value={dvalue[`dvalue${x}`]}></input> 
                <button className="btn serachbutton modalbutton dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" ></button>
                <div name='discount_type' id={dtype[`dtype${x}`]} className="dropdown-menu dropdown-menu-right"  aria-labelledby="dropdownMenuButton">
                  <a onClick={(e)=>handleDtypeChange(e)} id={x} name="%" className="dropdown-item">%</a>
                  <a onClick={(e)=>handleDtypeChange(e)} id={x} name="rs" className="dropdown-item">rs</a>
                </div>  
              </td>
              {/* amount */}
              <td className='' id ="amount"><input data-toggle="tooltip" data-placement="top" title={avalue[`avalue${index}`]} className="inputanddropbox" readOnly value={avalue[`avalue${index}`]}></input>
                {/* <i onClick = {handleDeleteRow} id={index} className="far deleteButton fa-window-close" data-toggle="tooltip" data-placement="top" title="Click to DELETE row"></i> */}
              </td>
            </tr>)}
          </tbody>
        </table>
        <div className='d-flex flex-row'>
          <button type="button" className="addbutton btn buttonmodal btn-sm mr-2" onClick={(e)=>AddRow(e,value)}>Add New Line</button>
          <button type="button" className="deleteButton btn buttonmodal btn-sm ml-2" onClick={(e)=>handleDeleteRow(e,value)}>Delete Row</button>
          <button type="button" className="calculatebutton btn buttonmodal btn-sm ml-2" onClick={calculateSubtot}>Calculate</button>
        <ul className="listamt list-group">
          <li className="list-group-item">Sub Total<input className='subtotalinput' readOnly name='subtotal' value={subtot}></input></li>
          <li className="list-group-item">Adjustment
            <input value={adj} name='adjustment_value' onChange={handleAdj} className='subtotalinput'></input>
            <select onChange={(e)=>handleAdjType(e)} value={adjtype} name='adjustment' className='selectadjustment' id="cars">
              <option value = '' selected disabled hidden>nil</option>
              <option value="">nil</option>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </li>
          <li className="list-group-item">Total (Rs.)<input readOnly value={tvalue} name='total'className='subtotalinput'></input></li>
        </ul>
        </div>
       </div> 
)
}

export default Table
