import React from "react";
import { Nav, Form } from "react-bootstrap";
import "./search.css";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <Nav>
      <Form className="searchbar">
        <input
          className="search-input"
          type="text"
          name=""
          placeholder="Search for a product"
        />
      </Form>
    </Nav>
  );
};

export default Search;
