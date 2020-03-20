import {useReducer} from 'react'

const detailReducer =(state,action)=>{
    switch(action.type){
        case 'customer':
            // console.log("Fetched DATA : ",action);
            if(action.setDetail){
                return {
                    loading:false,
                    list:action.list,
                    detail:action.detail,
                    content:{
                        name:'customer_name',
                        pk:'customer_id'
                    }
                  }
            }else if(action.setList){
                return {
                    loading:false,
                    list:action.list,
                    detail:action.detail,
                    content:{
                        name:'customer_name',
                        pk:'customer_id'
                    }
                  }
                }
            else{
            return {
                loading:false,
                list:action.payload,
                detail:action.detail,
                content:{
                    name:'customer_name',
                    pk:'customer_id'
                }
              }
            }
        case 'salesorder':
            console.log("Fetched DATA : ",action);
            if(action.setDetail){
                return {
                    loading:false,
                    list:state.list,
                    detail:action.detail,
                    content:{
                        name:'sales_order_no',
                        pk:'id'
                    }
                  };
            }else if(action.setList){
            return {
                loading:false,
                list:action.list,
                detail:action.detail,
                content:{
                    name:'sales_order_no',
                    pk:'id'
                }
              }
            }else{
                return {
                    loading:false,
                    list:action.payload,
                    detail:action.detail,
                    content:{
                        name:'sales_order_no',
                        pk:'id'
                    }
                  }
                }
        case 'purchaseorder':
            console.log("Fetched DATA : ",action.payload);
            if(action.setDetail){
                return {
                    loading:false,
                    list:state.list,
                    detail:action.detail,
                    content:{
                        name:'name',
                        pk:'vendor_id'
                    }
                  };
            }else{
            return {
                loading:false,
                list:action.payload,
                detail:action.detail,
                content:{
                    name:'name',
                    pk:'vendor_id'
                }
              }}
        case 'vendor':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                list:state.list,
                detail:action.detail,
                content:{
                    name:'',
                    pk:''
                }
              };
        case 'bill':
            console.log("Fetched DATA : ",action.payload);
            if(action.setDetail){
                return {
                    loading:false,
                    list:state.list,
                    detail:action.detail,
                    content:{
                        name:'name',
                        pk:'vendor_id'
                    }
                  };
            }else{
            return {
                loading:false,
                list:action.payload,
                detail:action.detail,
                content:{
                    name:'name',
                    pk:'vendor_id'
                }
              }}
        case 'invoice':
            console.log("Fetched DATA : ",action.payload);
            if(action.setDetail){
                return {
                    loading:false,
                    list:state.list,
                    detail:action.detail,
                    content:{
                        name:'customer_name',
                        pk:'customer_id'
                    }
                  };
            }else{
            return {
                loading:false,
                list:action.payload,
                detail:action.detail,
                content:{
                    name:'customer_name',
                    pk:'customer_id'
                }
              }}
        case 'product':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                list:state.list,
                detail:action.detail,
                content:{
                    name:'',
                    pk:''
                }
              };
        case 'productgroup':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                list:state.list,
                detail:action.detail,
                content:{
                    name:'',
                    pk:''
                }
              };
            default:
            return state
    }
}

function useDetail(defaultState){
    const[state,dispatch] = useReducer(detailReducer,defaultState);
    
    return [state,dispatch]
}

export default useDetail
