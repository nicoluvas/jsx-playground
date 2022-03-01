
import '../../assets/App.css'
import './home.css'

import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  
    //

    return (
        
    <div className="home-main">
    <header className="home-header">
        <nav className="home-navbar">
            <Link className="btn-to-login" to="/login">
                <button className="btn-to-login" >LOG OUT</button>
            </Link>
            <Link className="btn-to-login" to="/login">
                <button className="btn-to-login" >LOG OUT</button>
            </Link>
            <Link className="btn-to-login" to="/login">
                <button className="btn-to-login" >LOG OUT</button>
            </Link>
        </nav>
    </header>
        
        <footer className="home-footer">Test</footer>
    </div>
    );
  };
  