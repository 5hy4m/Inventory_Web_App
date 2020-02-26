import {useReducer} from 'react'

const modelReducer =(state,action)=>{
    switch(action.type){
        
    }
}


function useModel(defaultState){
    const[state,dispatch] = useReducer(modelReducer,defaultState);
    
    return [state,dispatch]
}

export default useModel
