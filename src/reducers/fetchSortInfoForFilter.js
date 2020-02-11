export default(state = {
    sortType:"ASC",
    columnName:"LOADING",
    columnDetails:[]
    },action) => {
    if(action.type === "SORTING"){
        console.log(action);
        if(action.payload.sortType === 'ASC'){
            console.log("BEFORE SORTING : ",action.payload.columnDetails);
            action.payload.columnDetails.sort(function(a, b){
                var nameA=a.customer_name.toLowerCase(), nameB=b.customer_name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
            // console.log("AFTER SORTING : ",action.payload.columnDetails);
            const newpayload = {...action.payload}
            console.log("AFTER SORTING : ",newpayload.columnDetails);
            
            return newpayload;
        }else if(action.payload.sortType==='DESC'){
            
            console.log("BEFORE DESC SORTING : ",action.payload.columnDetails);
            action.payload.columnDetails.sort(function(a, b){
                var nameA=a.customer_name.toLowerCase(), nameB=b.customer_name.toLowerCase()
                if (nameA > nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
            const newpayload = {...action.payload}
            console.log("AFTER DESC SORTING : ",newpayload.columnDetails);
            return newpayload;
            }
        }
        else
        {
        return state;
    }
};