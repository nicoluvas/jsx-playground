
import '../../assets/App.css'
import './home.css'

import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  
    //

    return (
        
    <div className="home-main">

        <div className="home-navbar">
            <Link className="btn-to-login" to="/login">
                <button className="btn-to-login" >LOG OUT</button>
            </Link>
        </div>
        
        <footer className="home-footer">Test</footer>
    </div>
    );
  };
  