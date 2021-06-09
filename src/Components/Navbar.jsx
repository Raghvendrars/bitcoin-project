import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
      <a class="navbar-brand text-dark" href="#">
        <h5>LOGO</h5>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <h6>Cryptocurrencies</h6> 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <h6>Exchanges</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <h6>NFT</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
            <h6>Portfolio</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
            <h6>Watchlist</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
            <h6>Portfolio</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
            <h6>Calendars</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
            <h6>Products</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
            <h6>Learn</h6>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
