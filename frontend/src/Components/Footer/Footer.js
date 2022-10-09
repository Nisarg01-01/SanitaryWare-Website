import React from "react";
import "./Footer.css";

// import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>THICC MEMES INC</h4>
            <h1 className="list-unstyled">
              <li className="listitem">Phone Number</li>
              <li className="listitem">City and State</li>
              <li className="listitem">Address line</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li className="listitem">Tiles</li>
              <li className="listitem">Sanitary Ware</li>
              <li className="listitem">Others</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Col3</h4>
            <ui className="list-unstyled">
              <li className="listitem">Dank</li>
              <li className="listitem">Stuff1</li>
              <li className="listitem">Stuff2</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Om Enterprisis | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
