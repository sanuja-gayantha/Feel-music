import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

// custom imports
import Music from '../images/milk-and-mocha-cute.gif';
import {useGlobalContext} from '../Context';

const Login = () => {

    const {handleAuthorize, token} = useGlobalContext();
    const CLIENT_ID = '41b622f74a1d4d96b3e3724da39665a2'
    const REDIRECT_URI = "http://localhost:3000/login"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    useEffect(() => {
        const hash = window.location.hash
        let token = '';
        if (hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            handleAuthorize(token);
        }    
    },[])

    return(
        <div className="login">
            <img src={Music}></img>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                <button className='btn login-btn'>Login</button>
            </a>
            {token && <Link to='/'></Link>}
        </div>
    );
}

export default Login;