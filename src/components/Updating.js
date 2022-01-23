import React from 'react';
import { Link } from 'react-router-dom'
import Music from '../images/milk-and-mocha-cute.gif';

const Updating = () => {
    return(
                <div className="update-center">
                    <img src={Music}></img>
                    <h1>App is under developing!</h1>              
                </div>
    )
}

export default Updating;