import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CSS/SingleProd.css";

const Singleproduct = ({num}) => {
  const product = [
    {
      _id: {
        $oid: "63464c368f93e80e7542fdd8"
      },
      manufacturer_id: {
        $oid: "63464b258f93e80e7542fdd5"
      },
      product_name: "Tape",
      company_name: "Jaquar",
      product_no: 123,
      qty: 500,
      feature: "Black Glossy",
      price: 1000
    },
    {
      _id: {
        $oid: "63464c818f93e80e7542fdd9"
      },
      manufacturer_id: {
        $oid: "63464b258f93e80e7542fdd5"
      },
      product_name: "Shower",
      company_name: "Jaquar",
      product_no: 321,
      qty: 0,
      feature: "Silver Coated",
      price: 2000
    },
    {
      _id: {
        $oid: "63464ca78f93e80e7542fdda"
      },
      manufacturer_id: {
        $oid: "63464b568f93e80e7542fdd6"
      },
      product_name: "Basin",
      company_name: "Cera",
      product_no: 125,
      qty: 550,
      feature: "Black mate finish",
      price: 10000
    },
  ];

  let location =  useLocation();
  // const  = location.state.num;
  console.log(num);

  const SingleProduct = product.find(
    (item) => item._id.$oid === location.state);
  return (
    <div className="SP-container">
      <div className="grid-two-column">
        <div className="SP-image">
          <img src="images/Kohler.jpg" alt="" />
        </div>
        <div className="SP-details">
          <h1 className="proname">{SingleProduct.product_name}</h1>
          <h3 className="pricearea">Price: {SingleProduct.price}</h3>
          <h3 className="text">Quantity: {SingleProduct.qty}</h3>
          <h3 className="text">Company Name:{SingleProduct.company_name}</h3>
          <h3 className="text">Description: {SingleProduct.feature}</h3>
          <h3 className="text">Availability: {SingleProduct.qty>0?"In Stock" : "Not Available"}</h3>
          <button type="submit" className="btn">
              Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
