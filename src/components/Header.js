import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { cartSlice, initialState } from "./Redux/storeSlice";
import ProductAPI from "./ProductAPI";
import { useSelector } from "react-redux";
import { FormControl } from "react-bootstrap";
import { InputLabel, NativeSelect } from "@mui/material";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";

const Header = () => {
  const numItems = useSelector((state) => state.cart.products);

  const navigation = useNavigate()

  return (
    <div className="header">
      <Link to="/"   data-aos="zoom-in"    data-aos-delay="250">
        <img src={require("./icons/logo.png")} className="logo" alt=""></img>
      </Link>
      <div className="d-flex  text-white location">
        <div className="location-icon">
          <i class="fa-solid fa-location-dot m-auto me-3 h5"></i>
        </div>
        <div className="lh-sm ">
          <p className="text-gray">Deliver to</p>
          <p className="text-bold ">Egypt</p>
        </div>
      </div>
      <div className="header-search">
        <select className="selection">
          <option value="all">All Departments</option>
          <option value="Arts">Arts & Crafts</option>
          <option value="Automotive">Automotive</option>
          <option value="Baby"> Baby</option>
          <option value="">Beauty & Personal Care</option>
          <option value="">Books</option>
          <option value="">Computers</option>
          <option value="">Men's Fashion</option>
          <option value="">Women's Fashion</option>
          <option value="">Sports & Outdoors</option>
          <option value="">Video Games</option>
          <option value="">Electronics</option>
          <option value="">Boys' Fashion</option>
          <option value="">Health & Household</option>
          <option value="">Home & Kitchen</option>
        </select>
        <input className="search-input" type="text" />
        {/* <img src={require("../img/icons/search-icon.png")} className=""/> */}
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <div className="header-line1">
              <div className="header-line1">Hello , Sign in</div>
              <div className="header-line2">
                Accounts & Lists <i class="fa-solid fa-caret-down"></i>
              </div>
            </div>
            <div className="header-line2"></div>
          </div>

        </Link>
        <Link to="">
          <div className="header-option return">
            <div className="header-line1">Returns</div>
            <div className="header-line2">& Orders</div>
          </div>
        </Link>
        <div className="header-option your-prime">
          <div className="header-line1">Your</div>
          <div className="header-line2">Prime</div>
        </div>
        <Link to="./checkout">
          <div className="header-Cart">
            <img src={require("./icons/cart.png")} className="cart" />
            <span className="header-count-cart">{numItems.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
