import {useReducer} from 'react'

const filterReducer =(state,action)=>{
    switch(action.type){
        case 'customer':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:'customer_name',fname:'Name'},
                    {bname:"phone_no",fname:'Phone No'},
                    {bname:"email",fname:'Email'},
                    {bname:"outstanding_recievables",fname:'Outstanding Recievables'}
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn: {bname:'customer_name',fname:'Name'},
                sortColumn: {bname:'customer_name',fname:'Name',asc:true},
            };
        case 'salesorder':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:"sales_order_date",fname:'DATE'},
                    {bname:'sales_order_no',fname:'SALES ORDER#'},
                    {bname:"customer_id",fname:'CUSTOMER NAME'},
                    {bname:"sales_order_status",fname:'ORDER STATUS'},
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:"sales_order_date",fname:'DATE'},
                sortColumn:{bname:"sales_order_date",fname:'DATE',asc:true},
            };
        case 'purchaseorder':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:'purchase_date',fname:'DATE'},
                    {bname:"purchase_order_no",fname:' PURCHASE ORDER#'},
                    {bname:"purchase_order_status",fname:'ORDER STATUS'},
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:'purchase_date',fname:'DATE'},
                sortColumn:{bname:'purchase_date',fname:'DATE',asc:true},
            };
        case 'vendor':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:'vendor_name',fname:'NAME'},
                    {bname:"vendor_phno",fname:'Phone No'},
                    {bname:"vendor_email",fname:'Email'},
                    {bname:"outstanding_payables",fname:'Outstanding Payables'}
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:state.searchColumn,
                sortColumn:state.SortColumn
            };
        case 'bill':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:'bill_date',fname:'DATE'},
                    {bname:"bill_no",fname:' BILL#'},
                    {bname:"bill_status",fname:'BILL STATUS'},
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:'bill_date',fname:'DATE'},
                sortColumn:{bname:'bill_date',fname:'DATE',asc:true}
            };
        case 'invoice':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:'customer_name',fname:'Name'},
                    {bname:"phone_no",fname:'Phone No'},
                    {bname:"email",fname:'Email'},
                    {bname:"outstanding_recievables",fname:'Outstanding Recievables'}
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:state.searchColumn,
                sortColumn:state.SortColumn
            };
        case 'FETCH_ERROR':
            return {
                loading:false,
                error:action.payload,
                columns:[],
                headers:[],
                query:state.query,
                searchColumn:state.searchColumn,
                sortColumn:state.SortColumn,
            }
        case 'SEARCHBAR':
            return{
                headers:state.headers,
                loading:state.loading,
                columns:state.columns,
                error:state.error,
                query:action.payload.query,
                searchColumn:action.payload.searchColumn,
                sortColumn:state.SortColumn,
            }
        case 'SORTING':
            return{
                headers:state.headers,
                loading:state.loading,
                columns:state.columns,
                error:state.error,
                query:state.query,
                searchColumn:state.searchColumn,
                sortColumn:action.payload,
            }
            default:
            return state
    }
}

function useFilter(defaultState){
    const[state,dispatch] = useReducer(filterReducer,defaultState);
    
    return [state,dispatch]
}

export default useFilter
