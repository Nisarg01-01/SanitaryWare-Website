import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";


const Nav = () => {
  return (
    <header className="Nav">
      <NavLink to="/" className="Logo">
        <img src="images/CompanyLogo.png" alt="logo" className="imglogo"/>
      </NavLink>
      <nav>
        <ul className="List">
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
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
            <NavLink to="/cart" className="trolleyandcount">
              <FiShoppingCart className="trolley" />
              <span className="CartCount">10</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
