import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Product.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/product/category/Sanitary_ware")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const changecomp = (comp) => {
    setCompany(comp);
    fetch(`http://localhost:4000/api/product/company/${comp}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredProducts(data);
      });
  };

  const changecat = (Subcat) => {
    setCategory(Subcat);
    fetch(`http://localhost:4000/api/product/subcategory/${Subcat}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredProducts(data);
      });
  };

  

  return (
    <div className="Filter-prod">
      <div className="Filter">
        <div className="Filter-1">
          <h3>Filter</h3>
          <div className="Filter-1-2">
            <h4>Company</h4>
            <div className="Filter-1-2-1">
              <select
                id="selectcomp"
                onClick={(e) => changecomp(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Jaquar">Jaquar</option>
                <option value="Kohler">Kohler</option>
                <option value="Cera">Cera</option>
              </select>
            </div>
          </div>
          <div className="Filter-1-3">
            <h4>Product</h4>
            <div className="Filter-1-3-1">
              <select id="selectcat" onClick={(e) => changecat(e.target.value)}>
                <option value="All">All</option>
                <option value="Tape">Tape</option>
                <option value="Wash Basin">Wash Basin</option>
                <option value="Shower">Shower</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="ProdContainer">
        {filteredProducts.length > 0 &&
          filteredProducts.map((item, index) => (
            <NavLink to="/SingleProduct" state={item.Product_no} className="Link">
              <div className="card" key={index}>
                <div className="image">
                  <img src="/images/Kohler.jpg" alt={item.Product_name} />
                </div>
                <div className="details">
                  <h1 className="prodname">{item.Product_name}</h1>
                  <h3 className="price">Price: {item.Price}</h3>
                </div>
              </div>
            </NavLink>
          ))}
        {/* create card to display multiple products from product list */}
        {filteredProducts.length < 1 &&
          product.map((item, index) => (
            <NavLink to="/SingleProduct" state={item.Product_no} className="Link">
              <div className="card" key={index}>
                <div className="image">
                  <img src={item.Product_img} alt={item.Product_name} />
                </div>
                <div className="details">
                  <h1 className="prodname">{item.Product_name}</h1>
                  <h3 className="price">Price: {item.Price}</h3>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Product;
