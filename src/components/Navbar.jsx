// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/category/men's clothing">Men's Clothing</Link>
      </li>
      <li>
        <Link to="/category/women's clothing">Women's Clothing</Link>
      </li>
      <li>
        <Link to="/category/jewelery">Jewelry</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
