// var _ = require('lodash');


export default(state ={
                        contentType:"Dashboard",
                        columns:['Loading',"Loading"],
                        details:[{loading:"True"},{loading:"True"}],
                    }
                    ,action) => {
                        // console.warn(action);
                                if(action.type==='Sidebar'){
                                    console.log(action.payload);
                                    const newpayload = {...action.payload}
                                    console.log(newpayload);
                                    return newpayload;
                                }
                                else{
                                    return state;
                                }
};