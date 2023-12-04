import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import FooterSignIn from "./FooterSignIn";
import Footer from "./Footer";
import BeforFooter from "./BeforFooter";
import Marqee from "../Marqee";


const CheckEmptyCart = () => {
  return (
    <div>
      <Marqee/>
      <div
        className="items-empty-container"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <img src={require("../images/emptyCart.png")} alt="" className="pe-4" />
        <div className="cart-box bg-white ">
          <h5 className="text-bold">Your Cart feels lonely.</h5>
          <div>
            <h6 className="p-insde-box-cart w-100 m-auto">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </h6>
          </div>
          <Link to="/">
            <button> Continue Shopping</button>
          </Link>
        </div>
       
      </div>
      <FooterSignIn/>
      <BeforFooter/>
    </div>
  );
};

export default CheckEmptyCart;
