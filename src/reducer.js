
const reducer = (state, action) => {
    switch (action.type){
        case 'SET_LOADING' : {
            return {...state, isLoading:true};
        }
        case 'SET_LYRICS': {
            return {
                ...state, 
                isLoading:false, 
                // hits:action.payload.hits, 
                // nbPages:action.payload.nbPages
            }
        }
        case 'HANDLE_SEARCH':{
            return {
                ...state, 
                searchValue:action.payload
            }
        }
        case 'SET_TOKEN':{
            return {
                ...state, 
                token:action.payload
            }
        }
        case 'Remove_TOKEN':{
            return{
                ...state, 
                token:''
            }
        }
        default:
            throw new Error (`No matching "${action.type}" action type.`)

    }
}

export default reducer;