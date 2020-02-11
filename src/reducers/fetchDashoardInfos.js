export default(state = [],action) => {
    if(action.type==='Dashboard'){
        return action.payload;
    }
    else{
        return state;
    }
};