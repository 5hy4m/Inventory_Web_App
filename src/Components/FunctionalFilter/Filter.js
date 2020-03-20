import React, {useEffect} from 'react'
import djangoInventory from '../../api/djangoInventory';
import FilterContainer from './FilterContainer';
import FilterBar from '../FunctionalFilter/FilterBar';
import '../../css/Filter.css'
import useFilter from '../Hooks/FilterHooks';
// import useFetch from '../Hooks/FetchFilterHooks';

export const Context = React.createContext()

async function fetchChildDataOfSalesOrder(filterType, response) {

    for await(const data of response.data) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/${data.id}/customer/`)
            .then(results => {
                // console.log(results.data);
                data.customer_name = results.data
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: 'Unable to fetch'};
            })

    }
    // console.log("mutated DATA FROM CHILD : ", response.data);

    return response.data
}
async function fetchChildDataOfInvoice(filterType, response) {

    for await(const data of response.data) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/${data.id}/customer/`)
            .then(results => {
                data.customer_name = results.data
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: error.response.data};
            })

    }
    console.log("mutated DATA FROM CHILD : ", response.data);

    return response.data
}

async function fetchChildDataOfBill(filterType, response) {
    for await(const data of response.data) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/${data.id}/vendor/`)
            .then(results => {
                data.name = results.data
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: error.response.data};
            })

    }
    // console.log("mutated DATA FROM CHILD : ",response.data);

    return response.data
}

async function fetchChildDataOfPurchaseOrder(filterType, response) {
    for await(const data of response.data) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/${data.id}/vendor/`)
            .then(results => {
                data.name = results.data
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: error.response.data};
            })

    }
    // console.log("mutated DATA FROM CHILD : ",response.data);

    return response.data
}
async function fetchChildDataOfProduct(filterType, response) {
    for await(const data of response.data) {
        // console.log(data.stocks.quantity);
        if (data.group_id !== null) {
            await djangoInventory
                .post(`http://127.0.0.1:8000/${filterType}/${data.id}/getProductGroupOfEachItem/`, {"group_id": data.group_id})
                .then(result => {
                    data.group_name = result.data;
                })
                .catch(error => {
                    return {type: 'FETCH_ERROR', payload: error.response.data};
                })
        }
        data.stockOnHand = data.stocks.quantity;
    }
    console.log("mutated DATA FROM CHILD : ", response.data);

    return response.data
}

async function fetchChildDataOfProductGroup(filterType, response) {
    for await(const data of response.data) {
        console.log(data.group_id, filterType);
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/${data.group_id}/stockOnHand`)
            .then(result => {
                console.log(result);
                data.stockOnHand = result.data;
            })
            .catch(error => {
                console.log(error);

            })
    }
    console.log("mutated DATA FROM CHILD : ", response.data);

    return response.data
}

function Filter(props) {
    const defaultState = {
        headers: [],
        loading: true,
        columns: [],
        error: '',
        query: '',
        searchColumn: {
            fname: "",
            bname: ""
        },
        sortColumn: {
            fname: "",
            bname: "",
            asc: false
        },
        ordernumber: 0
    }
    const [state,
        dispatch] = useFilter(defaultState);

    async function fetchSalesOrder(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                const mutatedData = await fetchChildDataOfSalesOrder(filterType, response);
                // console.log("mutatedData from parent",mutatedData);
                dispatch({type: filterType, payload: mutatedData})
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: 'Unable to fetch'}
            })
    }

    async function fetchCustomer(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                dispatch({type: filterType, payload: response.data})
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: 'Unable to fetch'}
            })
    }

    async function fetchInvoice(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                const mutatedData = await fetchChildDataOfInvoice(filterType, response);
                console.log("mutatedData from parent", mutatedData);
                dispatch({type: filterType, payload: mutatedData})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR', payload: 'Unable to fetch'})
            })
    }

    async function fetchVendor(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                dispatch({type: filterType, payload: response.data})
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: 'Unable to fetch'}
            })
    }

    async function fetchProduct(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                const mutatedData = await fetchChildDataOfProduct(filterType, response);
                console.log("mutatedData from parent", mutatedData);
                dispatch({type: filterType, payload: mutatedData})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR', payload: 'Unable to fetch'})
            })
    }

    async function fetchProductGroup(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                const mutatedData = await fetchChildDataOfProductGroup(filterType, response);
                console.log("mutatedData from parent", mutatedData);
                dispatch({type: filterType, payload: mutatedData})
            })
            .catch(error => {
                console.log(error);

                dispatch({type: 'FETCH_ERROR', payload: 'Unable to Mother fetch'})
            })
    }

    async function fetchPurchaseOrder(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                const mutatedData = await fetchChildDataOfPurchaseOrder(filterType, response);
                console.log("mutatedData from parent",mutatedData);
                dispatch({type: filterType, payload: mutatedData})
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: 'Unable to fetch'}
            })
    }

    async function fetchBill(filterType) {
        await djangoInventory
            .get(`http://127.0.0.1:8000/${filterType}/`)
            .then(async(response) => {
                const mutatedData = await fetchChildDataOfBill(filterType, response);
                // console.log("mutatedData from parent",mutatedData);
                dispatch({type: filterType, payload: mutatedData})
            })
            .catch(error => {
                return {type: 'FETCH_ERROR', payload: 'Unable to fetch'}
            })
    }

    function searchBarCallBack(searchdata) {
        console.log("SEARCHBAR : ", searchdata);

        dispatch({
            type: "SEARCHBAR",
            payload: {
                query: searchdata.query,
                searchColumn: searchdata.searchColumn
            }
        });
    }

    function sortinfoCallBack(sortdata) {
        console.log("SORTDATA : ", sortdata);

        dispatch({type: 'SORTING', payload: sortdata});
    }

    useEffect(() => {

        async function fetchData() {
            // console.log(props.filterType);

            switch (props.filterType) {
                case 'customer':
                    await fetchCustomer(props.filterType)
                    break;
                case 'product':
                    await fetchProduct(props.filterType)
                    break;
                case 'productgroup':
                    await fetchProductGroup(props.filterType)
                    break;
                case 'salesorder':
                    await fetchSalesOrder(props.filterType)
                    break;
                case 'invoice':
                    await fetchInvoice(props.filterType)
                    break;
                case 'vendor':
                    await fetchVendor(props.filterType)
                    break;
                case 'purchaseorder':
                    await fetchPurchaseOrder(props.filterType)
                    break;
                case 'bill':
                    await fetchBill(props.filterType)
                    break;
                default:
                    dispatch({type: 'FETCH_ERROR', payload: 'WENT To default case'})
            }
        }
        fetchData();
    }, [props.filterType])

function setDetail(data){
    // console.log([...state.columns,props.detail]);
    // dispatch({
    //     type:props.filterType,
    //     payload:[...state.columns,props.detail]
    // })
}

    return (
        <Context.Provider
            value=
            {{ headers:state.headers, details:state.columns,
             searchbardata:(data)=>searchBarCallBack(data),
              query:state.query,
                searchColumn:state.searchColumn,
                 sortdata:(data)=>sortinfoCallBack(data),
                  sortColumn:state.sortColumn,
                   loading:state.loading,
                    error:state.error,
                     content:props.filterType,
                     detail:props.detail,
                     setDetail
                      }}>
            <section className="d-flex flex-column w-100">
                <FilterBar filterType={props.filterType}/>
                <FilterContainer/>
            </section >
        </Context.Provider>
    )
}

export default Filter;