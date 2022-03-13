import "./home.css";

import Banner from '../../assets/Banner.png';

import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../../components/Navbar/MenuItems.js";

export const Home = () => {
  return (
    <div className="home-main">
      <header>
        <img className="logo" src={Banner}></img>
        <nav>
          <ul className="home-navbar">
            <li><a href="#">Info</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </nav>
        <a className="repo-btn" href="#"><button>Log out</button></a>
      </header>
    </div>
  );
};
