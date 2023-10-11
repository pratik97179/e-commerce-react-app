import React from "react";
import { useRef } from "react";
import "../styles/header.css";
function Header(props) {
  const inputRef = useRef();
  return (
    <div className="header">
      <h1>SHOPIFY</h1>
      <div className="search-header">
        <input
          ref={inputRef}
          className="search-bar input"
          type="text"
          placeholder="Search All Products "
        />
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
