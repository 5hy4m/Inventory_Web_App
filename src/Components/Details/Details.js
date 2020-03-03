import React, { useState,useEffect} from 'react';
import '../../css/Details.css';
import DetailsList from './DetailsList';
import CustomerDetails from './CustomerDetails';
import useDetail from '../Hooks/DetailHooks';
import { BoxLoading } from 'react-loadingg';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import SalesOrderDetails from './SalesOrderDetails';
import djangoInventory from '../../api/djangoInventory';
import axios from 'axios'
export const DetailsContext = React.createContext();

function Details(props) {
  const defaultState = {
    loading:true,
    list:[],
    detail:null,
    content:{
      name:'',
      pk:''
    }
  }
  const [state,dispatch] = useDetail(defaultState);
  const[items,setItems] = useState([]);
  console.log();
  
  const setDetail =(data)=> {
    let detail=state.list.filter((x)=>x[state.content.pk] == data.target.id)[0]
    // console.log(data.target.id);
    // console.log(state.list);
    // console.log(detail);
    
    dispatch({
    type:props.location.state.content,
    setDetail:true,
    setList:false,
    detail:detail ,
    list:state.list,
  });  
}

const setList = (data)=>{
  
}


  useEffect(() => {
    const state = props.location.state
    let fetchItemssource = axios.CancelToken.source();
    async function fetchDetails(){
      // Fetching Products
      await djangoInventory
      .get(`http://127.0.0.1:8000/product/`,{cancelToken:fetchItemssource.token})
      .then(async (response) =>{
          setItems(response.data)
      })
      .catch(error=>{           
        throw error
      })

      switch(props.filterType){
        case 'customer': 
            dispatch({
              type:props.filterType,
              payload:state.list,
              detail:state.detail,
            });
            break;
        case 'product':
            
            break;
        case 'productgroup':
            
            break; 
        case 'salesorder':
          console.log(state.list);
          dispatch({
            type:props.filterType,
            payload:state.list,
            detail:state.detail,
          })
            break;
        case 'invoice':
          dispatch({
            type:props.filterType,
            payload:state.list,
            detail:state.detail,
          })
            break;
        case 'vendor':
            
            break;
        case 'purchaseorder':
          dispatch({
            type:props.filterType,
            payload:state.list,
            detail:state.detail,
          })
            break;
        case 'bill':
          dispatch({
            type:props.filterType,
            payload:state.list,
            detail:state.detail,
          })
            break;        
        default:
            dispatch({
                type:'FETCH_ERROR',
                payload:'WENT To default case'
            })
        }
      }
    fetchDetails();
    return () => {fetchItemssource.cancel();}
  },[props,dispatch])


 if(state.loading)
 return(
  <div className="content p-0 d-flex flex-fill col-xs-12"> 
  < BoxLoading/>
  </div>
 )
  return (
    <div className="content p-0 d-flex flex-fill col-xs-12">
      <DetailsContext.Provider
      value = {{
        setDetail,
        setList,
        fliterType:props.filterType,
        content:state.content,
        list:state.list,
        detail:state.detail,
        products:items
      }}>
          <DetailsList/>
          <Switch>
            <Route path="/customerDetails" exact render={()=><CustomerDetails/>}/>
            <Route path="/salesorderDetails" exact render={()=><SalesOrderDetails/>}/>
          </Switch>
      </DetailsContext.Provider>
    </div>
  )
}

export default Details

