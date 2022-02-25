
import '../../assets/App.css'
import './home.css'

import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  
    //

    return (
        
    <div className="home-main">
        <Link className="home-to-login-btn" to="/login">
            <button className="home-to-login-btn">Return to login</button>
        </Link>
        <footer className="home-footer">Test</footer>
    </div>
    );
  };
  