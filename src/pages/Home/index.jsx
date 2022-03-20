import "./home.css";
/*import "../../assets/App.css";*/
import { Link } from "react-router-dom";

import Banner from '../../assets/Banner.png';

/*
import { useState } from "react";
import { MenuItems } from "../../components/Navbar/MenuItems.js";
import { NavLink } from "react-router-dom";
*/

export const Home = () => {
  return (
    <div className="home-main">
    <div className="home-nav">

      <header className="home-header">
        <img className="logo" src={Banner} href='https://github.com/nicoluvas'></img>
        <nav>
          <ul className="home-navbar">
            <li className="home-il"><a href='#'>Support</a></li>
            <li className="home-il"><a href="#">Info</a></li>
            <li className="home-il"><a href="https://github.com/nicoluvas/jsx-playground">Github</a></li>
          </ul>
        </nav>
        <Link className="" to="../login">
        <button className="logout-btn">Log out</button>
        </Link>
      </header>

    <p>
    sss
    </p>
    </div>
    </div>
  );
};
