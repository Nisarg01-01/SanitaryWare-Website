import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Product.css";

const Product = () => {
  const product = [
    {
      _id: {
        $oid: "63464c368f93e80e7542fdd8",
      },
      manufacturer_id: {
        $oid: "63464b258f93e80e7542fdd5",
      },
      product_name: "Tape",
      company_name: "Jaquar",
      product_no: 123,
      qty: 500,
      feature: "Black Glossy",
      price: 1000,
    },
    {
      _id: {
        $oid: "63464c818f93e80e7542fdd9",
      },
      manufacturer_id: {
        $oid: "63464b258f93e80e7542fdd5",
      },
      product_name: "Shower",
      company_name: "Jaquar",
      product_no: 321,
      qty: 550,
      feature: "Silver Coated",
      price: 2000,
    },
    {
      _id: {
        $oid: "63464ca78f93e80e7542fdda",
      },
      manufacturer_id: {
        $oid: "63464b568f93e80e7542fdd6",
      },
      product_name: "Basin",
      company_name: "Cera",
      product_no: 125,
      qty: 550,
      feature: "Black mate finish",
      price: 10000,
    },
    {
      _id: {
        $oid: "63464c368f93e80e7542fdd8",
      },
      manufacturer_id: {
        $oid: "63464b258f93e80e7542fdd5",
      },
      product_name: "Tape",
      company_name: "Jaquar",
      product_no: 123,
      qty: 500,
      feature: "Black Glossy",
      price: 1000,
    },
    {
      _id: {
        $oid: "63464c818f93e80e7542fdd9",
      },
      manufacturer_id: {
        $oid: "63464b258f93e80e7542fdd5",
      },
      product_name: "Shower",
      company_name: "Jaquar",
      product_no: 321,
      qty: 550,
      feature: "Silver Coated",
      price: 2000,
    },
    {
      _id: {
        $oid: "63464ca78f93e80e7542fdda",
      },
      manufacturer_id: {
        $oid: "63464b568f93e80e7542fdd6",
      },
      product_name: "Basin",
      company_name: "Cera",
      product_no: 125,
      qty: 550,
      feature: "Black mate finish",
      price: 10000,
    },
  ];

  // const num = 123;
  return (
    <div className="Filter-prod">
      <div className="Filter">
        {/* create filter ui for product page */}
        <div className="Filter-1">
          <h3>Filter</h3>
          <div className="Filter-1-1">
            <h4>Price</h4>
            <div className="Filter-1-1-1">
              <input type="text" placeholder="Min" />
              <input type="text" placeholder="Max" />
            </div>
          </div>
          <div className="Filter-1-2">
            <h4>Company</h4>
            <div className="Filter-1-2-1">
              <input type="checkbox" />
              <label>Jaquar</label>
              <input type="checkbox" />
              <label>Cera</label>
              <input type="checkbox" />
              <label>Parryware</label>
              <input type="checkbox" />
              <label>Kohler</label>
            </div>
          </div>
          <div className="Filter-1-3">
            <h4>Product</h4>
            <div className="Filter-1-3-1">
              <input type="checkbox" />
              <label>Tape</label>
              <input type="checkbox" />
              <label>Shower</label>
              <input type="checkbox" />
              <label>Wash Basin</label>
            </div>
          </div>
        </div>
      </div>
      <div className="ProdContainer">
        {/* create card to display multiple products from product list */}
        {product.map((item, index) => (
          <NavLink to="/SingleProduct" state={item._id.$oid} className="Link">
            <div className="card" key={index}>
                <div className="image">
                  <img src="images/Kohler.jpg" alt={item.product_name} />
                </div>
                <div className="details">
                  <h1 className="prodname">{item.product_name}</h1>
                  <h3 className="price">Price: {item.price}</h3>
                </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Product;
