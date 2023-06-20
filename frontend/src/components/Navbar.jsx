import React from "react";
import logo from "./logo1.png";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <img id="logo" src={logo} alt="" />
        <div>
          <ul id="navMenu">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>BEAUTY</li>
            <li>HOME & LIVING</li>
          </ul>
        </div>
        <div id="leftNav">
          <div id="search">
            <div>
              <input
                type="text"
                placeholder="Search for Products, brand and More"
              />
            </div>
            <div id="search-icon">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div id="nav-icon">
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="bag-outline"></ion-icon>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
