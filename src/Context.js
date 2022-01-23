import React, {useEffect, useState, useContext, useReducer} from 'react';
import axios from 'axios';

// custom imports
import reducer from './reducer'

const initialState = {
    isLoading : false,
    searchValue : '',
    data:[],
    token:'',
  }

// const CLIENTID = '1156e74e343f472582fb8a08e6a9d81d'
// const REDIRECT_URI = "http://localhost:3000"
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
// const RESPONSE_TYPE = "token"

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // const fetchLyrics  = async (url) => {
    //     dispatch({ type:'SET_LOADING'});
        
    //     // Api call for retrieving tracks data
    //     axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,{
    //         'method': 'GET',
    //         'headers': {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': 'Bearer ' + tokenresponse.data.access_token
    //         }
    //     }).then(trackresponse=> {
    //         console.log(trackresponse.data.tracks);
    //         setTracks(trackresponse.data.tracks);
    //     }).catch(error=> console.log(error))
    //     }).catch(error => console.log(error));
    // }

    const handleSearch = (searchValue) => {
        dispatch({type:'HANDLE_SEARCH', payload:searchValue});
        window.localStorage.removeItem("token")
    }

    const handleAuthorize = (token) => {
        dispatch({ type:'SET_TOKEN', payload:token});
    }

    const logout = () => {
        dispatch({ type:'Remove_TOKEN'});
        window.localStorage.removeItem("token")
    }
    
    // useEffect(() => {
    //     fetchLyrics(url);
    // }, [url])


    return(
        <AppContext.Provider value={{...state, handleSearch, handleAuthorize, logout}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}