import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";
import Search from "../Search bar/Search";
import {CgProfile} from "react-icons/cg";


const Nav = () => {
  // get userInfo from local storage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
  // fetch cart count from backend
  // const [cartCount, setCartCount] = React.useState(0);
  // React.useEffect(() => {
  //   if (userInfo) {
  //     fetch(`http://localhost:4000/api/usercart/count/${userInfo.id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCartCount(data);
  //       })
  //       .catch((err) => {
  //         console.log("hello",err);
  //       });
  //   }
  // }, [userInfo]);

  // // Till cartcount is fetched from backend, show 0
  // if (cartCount === null) {
  //   setCartCount(0);
  // }
  

  return (
    <header className="Nav">
      <NavLink to="/Home" className="Logo">
        <img src="images/CompanyLogo.png" alt="logo" className="imglogo"/>
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
            <Search/>
          </li>
          <li>
            <NavLink to="/cart" className="trolleyandcount">
              <FiShoppingCart className="trolley" />
              {/* <span className="CartCount">{cartCount}</span> */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/ProfilePage" className="UserIcon">
              <CgProfile className="User"/>
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
