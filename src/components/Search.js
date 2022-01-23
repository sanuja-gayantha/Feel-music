import React, {useRef, useEffect} from 'react';
import { FaMusic } from "react-icons/fa";
import Music from '../images/milk-and-mocha-cute.gif';

// custom imports
import {useGlobalContext} from '../Context';

const Search = () => {
    const searchValue = useRef('');
    const {handleSearch, logout} = useGlobalContext();

    useEffect(() => {
        searchValue.current.focus()
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchValue.current.value);
    }

    return(
        <div className="search">
            <button className='btn' onClick={logout}>logout</button>
            <div className="search-title">
                <span><img src={Music}></img></span> feel music
            </div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="search-name" placeholder="song title.." ref={searchValue}></input>
                {/* <button className='btn'>Search</button> */}
            </form>
        </div>
    );
}

export default Search;