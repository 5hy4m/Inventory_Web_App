import {useReducer} from 'react'

const detailReducer =(state,action)=>{
    switch(action.type){
        case 'customer':
            // console.log("Fetched DATA : ",action);
            if(action.setDetail){
                return {
                    loading:false,
                    list:state.list,
                    detail:action.detail,
                  };
            }else{
            return {
                loading:false,
                list:action.payload,
                detail:action.detail,
              };}
        case 'salesorder':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                list:action.payload,
                detail:action.detail,
              };
        case 'purchaseorder':
            console.log("Fetched DATA : ",action.payload);
            return {
                 };
        case 'vendor':
            console.log("Fetched DATA : ",action.payload);
            return {
                 };
        case 'bill':
            console.log("Fetched DATA : ",action.payload);
            return {
                };
        case 'invoice':
            console.log("Fetched DATA : ",action.payload);
            return {
                };
        case 'product':
            console.log("Fetched DATA : ",action.payload);
            return {
                };
        case 'productgroup':
            console.log("Fetched DATA : ",action.payload);
            return {
                };
        case 'FETCH_ERROR':
            return {
                }
        case 'SEARCHBAR':
            return{
                }
        case 'SORTING':
            return{
                }
            case '#number':
                return{
                   }
            default:
            return state
    }
}

function useDetail(defaultState){
    const[state,dispatch] = useReducer(detailReducer,defaultState);
    
    return [state,dispatch]
}

export default useDetail
