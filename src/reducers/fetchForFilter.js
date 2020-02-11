export default(state = [],action) => {
    switch(action.type){
        case 'Customers':
            return action.payload
        default:
            return state;    
    }
};