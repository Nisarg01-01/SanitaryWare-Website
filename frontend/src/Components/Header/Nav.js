import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";
import Search from "../Search bar/Search";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  // get userInfo from local storage
  const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="Nav">
      <NavLink to="/Home" className="Logo">
        <img src="images/CompanyLogo.png" alt="logo" className="imglogo" />
      </NavLink>
      <nav>
        <ul className="List">
          {/* <li>
            <NavLink to="/category">Category</NavLink>
          </li> */}
          <li>
            <NavLink to="/Tiles">Tiles</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <Search />
          </li>
          {/* Display last two if localstorage hase userInfo is present */}
          {userInfo && (
            <>
              <li>
                <NavLink to="/cart" className="trolleyandcount">
                  <FiShoppingCart className="trolley" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/ProfilePage" className="UserIcon">
                  <CgProfile className="User" />
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
