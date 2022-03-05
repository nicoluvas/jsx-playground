import "../../assets/App.css";
import "./home.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../../components/Navbar/MenuItems.js";

export const Home = () => {
  //

  return (
    <div className="home-main">
        <nav className="home-navbar">
            <ul>
                <li><a className={item.cName}></a></li>
            </ul>
        </nav>
      <footer className="home-footer">Test</footer>
    </div>
  );
};
