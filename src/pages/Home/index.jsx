import "./home.css";
/*import "../../assets/App.css";*/

import Banner from '../../assets/Banner.png';

/*
import { useState } from "react";
import { MenuItems } from "../../components/Navbar/MenuItems.js";
import { NavLink } from "react-router-dom";
*/

export const Home = () => {
  return (
    <div className="home-main">
      <header className="home-header">
        <img className="logo" src={Banner} href='https://github.com/nicoluvas'></img>
        <nav>
          <ul className="home-navbar">
            <li className="home-il"><a href='#'>Support</a></li>
            <li className="home-il"><a href="#">Info</a></li>
            <li className="home-il"><a href="https://github.com/nicoluvas/jsx-playground">Github</a></li>
          </ul>
        </nav>
        <a href="#"><button className="logout-btn">Log out</button></a>
      </header>
    </div>
  );
};
