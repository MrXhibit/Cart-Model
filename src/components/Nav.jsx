import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Nav({ navDetails }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5 py-1">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/Images/shop_logo.png"
              alt="Shop-Logo"
              className="img-fluid Shop-Logo"
            />
            <h2 className="d-inline m-0 text-primary fst-italic">HB-Shop</h2>
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navItems"
            aria-controls="navItems"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navItems">
            <ul class="navbar-nav me-auto my-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="ShopItems"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="ShopItems">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-2">
              <button class="btn btn-outline-dark" type="submit">
                {/* <i class="bi-cart-fill me-1"></i> */}
                <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {navDetails.length}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
