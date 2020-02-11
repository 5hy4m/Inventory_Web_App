import djangoInventory from '../api/djangoInventory';

export const selectFromFilterDetails = detail => {
    return{
        type:'DETAIL_SELECTED',
        payload:detail,
    };
};

export const fetchForFilter = (filterType) =>{
    return async function (dispatch){
    
    console.log("ITS CALLING  AGAIN AND AGAIN");
    
    // console.log("ACTION from index.js : ",response.data);
    switch (filterType) {
        case 'Customers':
            const response = await djangoInventory.get('/customer'); 
            dispatch({
                type:"Customers",
                payload:{
                    columns:['Name','Phone Number','Email','Recievables'],
                    details:response.data,
                   }
               });
            break;

    
        default:
            break;
    }  
}
}

export const fetchDashboardinfos = () =>{
   
    return async function (dispatch){
        const products = await djangoInventory.get('/product'); 
        const productgroups = await djangoInventory.get('/productgroup'); 
        dispatch({
            type:"Dashboard",
            payload:{
                products:products.data,
                productgroups:productgroups.data,
            }
        });
    }
}

export const fetchContentFromSidebar = (contentType) =>{
    return async function (dispatch) {
        switch (contentType) {
            case 'Customers':
                // console.log(contentType);
                const response = await djangoInventory.get('/customer'); 
                dispatch({
                    type:"Sidebar",
                    payload:{
                        contentType:contentType,
                        columns:['Name','Phone Number','Email','Recievables'],
                        details:response.data,
                       }
                   });
                break;
            case 'Dashboard':
                const products = await djangoInventory.get('/product');
                const productgroup = await djangoInventory.get('./productgroup')
                   dispatch({
                       type:"Sidebar",
                       payload:{
                           contentType:contentType,
                           products,
                           productgroup,
                       }
                   })
                break;
        
            default:
                break;
        }  
    }
}

export const fetchSortInfoForFilter = (sortType,columnName,columnDetails) =>{
    console.log("ACTION IS CALLED : ",sortType);
        switch (sortType) {
            case "ASC":
                return{
                    type:"SORTING",
                    payload:{
                        sortType,
                        columnName,
                        columnDetails,
                    }
                }
            case "DESC":
                return{
                    type:"SORTING",
                    payload:{
                        sortType,
                        columnName,
                        columnDetails,
                    }
                }
            default:
                break;
        }
    }
