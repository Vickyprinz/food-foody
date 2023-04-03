import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import './Navbar.css';

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search" />
      <button type="submit">Search</button>
    </form>
  );
};

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartItems.length);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://img.freepik.com/premium-vector/bakery-logo-template_441059-121.jpg?w=2000" alt="Your Logo" />
        </Link>
      </div>
      <ul className="navbar-nav">
        <div className="navbar-icons">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <MdAccountCircle size={24} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <div className="cart-icon">
                <FaShoppingCart size={24} />
                <span className="badge">{cartCount}</span>
              </div>
            </Link>
          </li>
        </div>
      </ul>
      <div className="navbar-search">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;