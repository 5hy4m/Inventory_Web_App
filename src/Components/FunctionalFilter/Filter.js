import React,{useEffect} from 'react'
import djangoInventory from '../../api/djangoInventory';
import FilterContainer from './FilterContainer';
import FilterBar from '../FunctionalFilter/FilterBar';
import '../../css/Filter.css'
import useFilter from '../Hooks/FilterHooks';
// import useFetch from '../Hooks/FetchFilterHooks';

export const Context = React.createContext()

function Filter(props) {
    const defaultState = {
        headers:[],
        loading:true,
        columns:[],
        error:'',
        query:'',
        searchColumn:{fname:"",bname:"",},
        sortColumn:{fname:"",bname:"",asc:false},
    }
const[state,dispatch] = useFilter (defaultState);


function searchBarCallBack(searchdata){
    console.log("SEARCHBAR : ",searchdata);
    
    dispatch({
        type:"SEARCHBAR",
        payload:{
            query:searchdata.query,
            searchColumn:searchdata.searchColumn,
        }
    });
}

function sortinfoCallBack(sortdata){
    console.log("SORTDATA : ",sortdata);
    
    dispatch({
        type:'SORTING',
        payload:sortdata,
    });
}



useEffect(() => {
    async function fetchData(){  
        console.log(props.filterType);
              
     switch(props.filterType){
    case 'customer':
        console.log("inside customer");
        
        await djangoInventory
        .get(`http://127.0.0.1:8000/${props.filterType}/`)
        .then(response =>{
            
            dispatch({
                type:props.filterType,
                payload:response.data,
            })
        })
        .catch((error)=>{           
            dispatch({
                type:'FETCH_ERROR',
                payload:'Unable to fetch',
            })
        })
        break;
        case 'salesorder':
            await djangoInventory
            .get(`http://127.0.0.1:8000/${props.filterType}/`)
            .then(response =>{
                    response.data.map(async (data)=>{
                        await djangoInventory
                        .get(`http://127.0.0.1:8000/${props.filterType}/${data.id}/customers/`)
                        .then(results=>{
                            data.customer_name = results.data[0].fields.customer_name
                        }     
                    )
                .catch(error=>{
                    dispatch({
                        type:'FETCH_ERROR',
                        payload:'Unable to fetch',
                    });
                })}
                );
                    console.log(response.data);
                dispatch({
                    type:props.filterType,
                    payload:response.data,
                })
            })
            .catch(error=>{           
                dispatch({
                    type:'FETCH_ERROR',
                    payload:'Unable to fetch',
                })
            })
            break;
    default:
        dispatch({
            type:'FETCH_ERROR',
            payload:'WENT To default case'
        })
    }
}
fetchData();
}, [dispatch,props.filterType])

    return (
        <Context.Provider 
            value = {{
                headers:state.headers,
                details:state.columns,
                searchbardata:(data)=>searchBarCallBack(data),
                query:state.query,
                searchColumn:state.searchColumn,
                sortdata:(data)=>sortinfoCallBack(data),
                sortColumn:state.sortColumn,
                loading:state.loading,
                error:state.error,
            }}>
            <section className="d-flex flex-column w-100">  
                <FilterBar filterType = {props.filterType} />
                <FilterContainer />
            </section >   
        </Context.Provider>  
    )
}

export default Filter
