import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

// import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>OM ENTERPRISES VADODARA</h4>
            <h1 className="list-unstyled">
              <li className="listitem">098253 23659</li>
              <li className="listitem">Vadodara</li>
              <li className="listitem">10, Sitaram Complex New IPCL Rd, Subhanpura,
              </li>
            </h1>
          </div>
          <div className="col">
            <h4>CATEGORY</h4>
            <ui className="list-unstyled">
              <li className="listitem">
                <NavLink to="/Tiles">Tiles</NavLink>
              </li>
              <li className="listitem">
                <NavLink to="/product">Sanitary Ware</NavLink>
              </li>
            </ui>
          </div>
          <div className="col">
            <h4>SOCIAL MEDIA</h4>
            <ui className="list-unstyled">
              <li className="listitem">
              </li>
            </ui>
          </div>
          <div className="col">
            <h4>MAP</h4>
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.737155711977!2d73.15441751450263!3d22.32577828531037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8c0b9e99ebd%3A0xd94168846b5a671!2sOm%20Enterprise%20-%20Tile%20Showroom%20%2F%20Sanitary%20Ware%20%2F%20Bathroom%20Accessories%2F%20Hindware%20in%20Vadodara!5e0!3m2!1sen!2sin!4v1665500004566!5m2!1sen!2sin"
              width="300"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
