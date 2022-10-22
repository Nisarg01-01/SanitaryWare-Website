import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CSS/SingleProd.css";
import swal from "sweetalert";

const Singleproduct = ({ num }) => {
  let location = useLocation();
  const [SingleProduct, setsingleProd] = useState([]);

  // using useeffect to fetch data from the api
  useEffect(() => {
    fetch(`http://localhost:4000/api/product/product_no/${location.state}`)
      .then((res) => res.json())
      .then((data) => {
        setsingleProd(data);
      });
  }, []);

  // get local storage userInfo
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const addtocart = () => {
    fetch("http://localhost:4000/api/usercart/addtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userInfo.id,
        Product_name: SingleProduct.Product_name,
        Company_name: SingleProduct.Company_name,
        Product_no: SingleProduct.Product_no,
        Qty: 1,
        Feature: SingleProduct.Feature,
        Price: SingleProduct.Price,
        Product_cat: SingleProduct.Product_cat,
        Product_sub_cat: SingleProduct.Product_sub_cat,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
          swal("Successfull", "Product added to cart", "success");
        }
      });
  };

  return (
    <div className="SP-container">
      <div className="grid-two-column">
        <div className="SP-image">
          <img src="images/Kohler.jpg" alt="" />
        </div>
        <div className="SP-details">
          <h1 className="proname">{SingleProduct.Product_name}</h1>
          <h3 className="pricearea">Price: {SingleProduct.Price}</h3>
          <h3 className="text">Quantity: {SingleProduct.Qty}</h3>
          <h3 className="text">Company Name:{SingleProduct.Company_name}</h3>
          <h3 className="text">Description: {SingleProduct.Feature}</h3>
          <h3 className="text">
            Availability:{" "}
            {SingleProduct.Qty > 0 ? "In Stock" : "Not Available"}
          </h3>
          {SingleProduct.Qty > 0 && (
            <button type="submit" className="btn" onClick={addtocart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
