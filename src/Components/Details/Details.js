import React, { useEffect} from 'react'
import '../../css/Details.css'
import DetailsList from './DetailsList'
import DetailsDisplay from './DetailsDisplay'
import useDetail from '../Hooks/DetailHooks'
import { BoxLoading } from 'react-loadingg';

export const DetailsContext = React.createContext();

function Details(props) {
  const defaultState = {
    loading:true,
    list:[],
    detail:null,
  }
  const [state,dispatch] = useDetail(defaultState);
  const setDetail =(data)=> dispatch({
    type:props.location.state.content,
    setDetail:true,
    detail: state.list.filter((x)=>x.customer_id == data.target.id)[0],
  });  
  useEffect(() => {
    const state = props.location.state
    async function fetchDetails(){
      switch(props.filterType){
        case 'customer': 
            dispatch({
              type:props.filterType,
              payload:state.list,
              detail:state.detail,
            })
            break;
        case 'product':
            
            break;
        case 'productgroup':
            
            break; 
        case 'salesorder':
            
            break;
        case 'invoice':
            
            break;
        case 'vendor':
            
            break;
        case 'purchaseorder':
            
            break;
        case 'bill':
            
            break;        
        default:
            dispatch({
                type:'FETCH_ERROR',
                payload:'WENT To default case'
            })
        }
    } 
    fetchDetails();
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
        content:props.filterType,
        list:state.list,
        detail:state.detail,
      }}
      >
          <DetailsList/>
          <DetailsDisplay/>
      </DetailsContext.Provider >
    </div>
  )
}

export default Details

