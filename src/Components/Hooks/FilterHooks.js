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
                    {bname:"recievables",fname:'Outstanding Recievables'}
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
                    {bname:"customer_name",fname:'CUSTOMER NAME'},
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
                    {bname:'name',fname:'VENDOR NAME'}
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
                    {bname:'name',fname:'NAME'},
                    {bname:"phone_no",fname:'Phone No'},
                    {bname:"email",fname:'Email'},
                    {bname:"payables",fname:'Outstanding Payables'}
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:'name',fname:'NAME'},
                sortColumn:{bname:'name',fname:'NAME',asc:true},
                
            };
        case 'bill':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:'bill_date',fname:'DATE'},
                    {bname:"bill_no",fname:' BILL#'},
                    {bname:"bill_status",fname:'BILL STATUS'},
                    {bname:"due_date",fname:' DUE DATE'},
                    {bname:"name",fname:'VENDOR NAME'},
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:'bill_date',fname:'DATE'},
                sortColumn:{bname:'bill_date',fname:'DATE',asc:true},
                
            };
        case 'invoice':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:"invoice_date",fname:'DATE'},
                    {bname:"invoice_no",fname:'INVOICE#'},
                    {bname:"customer_name",fname:'Customer Name'},
                    {bname:"invoice_status",fname:'Status'}
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:'invoice_date',fname:'DATE'},
                sortColumn:{bname:'invoice_date',fname:'DATE',asc:true},
                
            };
        case 'product':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:"product_name",fname:'NAME'},
                    {bname:"group_name",fname:'GROUP NAME'},
                    {bname:"stockOnHand",fname:'STOCK ON HAND'},
                    {bname:"unit",fname:'UNIT'},
                    {bname:"selling_price",fname:'PRICE'},
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:"product_name",fname:'NAME'},
                sortColumn:{bname:"product_name",fname:'NAME',asc:true},
                
            };
        case 'productgroup':
            console.log("Fetched DATA : ",action.payload);
            return {
                loading:false,
                headers:[
                    {bname:"group_name",fname:'GROUP NAME'},
                    {bname:"stockOnHand",fname:'STOCK ON HAND'},
                    {bname:"unit",fname:'UNIT'},
                    {bname:"value",fname:'ATTRIBUTE'},
            ],
                columns:action.payload,
                error:'',
                query:state.query,
                searchColumn:{bname:"product_name",fname:'NAME'},
                sortColumn:{bname:"product_name",fname:'NAME'},
                
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
            case '#number':
                return{
                    headers:state.headers,
                    loading:state.loading,
                    columns:state.columns,
                    error:state.error,
                    query:state.query,
                    searchColumn:state.searchColumn,
                    sortColumn:state.sortColumn,
                    
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
