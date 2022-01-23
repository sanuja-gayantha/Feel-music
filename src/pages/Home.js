import React,{useEffect} from 'react';

// custom imports
import Search from '../components/Search';
import TrackList from '../components/TrackList';
import Player from '../components/Player';
import {useGlobalContext} from '../Context';
import Music from '../images/milk-and-mocha-cute.gif';

const Home = () => {

    const {handleAuthorize} = useGlobalContext();
    let token = window.localStorage.getItem("token");

    const CLIENT_ID = '41b622f74a1d4d96b3e3724da39665a2'
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    useEffect(() => {
        const hash = window.location.hash
        token = window.localStorage.getItem("token");
        
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            

            window.location.hash = ""
            window.localStorage.setItem("token", token)
  
        }   
        handleAuthorize(token); 
    },[])

    if(!token) {
        return(
            <div className="login">
                <img src={Music}></img>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    <button className='btn login-btn'>Login</button>
                </a>
            </div>
        );
    }
    return(
        <div className="main-container">
            <Search />
            <TrackList />
            <Player/>
        </div>
    );
}

export default Home;