import React from "react";

const BeforFooter = () => {
  return (
    <div className="BeforFooter">
      <div className="BeforFooter-container">
        <div>
          <h6 className="text-bold">Get to Know Us</h6>
          <ul className="beforFooter-ul">
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <h6 className="text-bold">Make Money with Us</h6>
          <ul className="beforFooter-ul">
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Sell Product with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See More Make Money with Us</li>
          </ul>
        </div>
        <div>
          <h6 className="text-bold">Amazon Payment Products</h6>
          <ul className="beforFooter-ul">
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>About Amazon</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <h6 className="text-bold">Let Us Help You</h6>
          <ul className="beforFooter-ul">
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>FAQ & Help</li>
          </ul>
        </div>
      </div>
      <div className="logo-section">
        <img src={require('./icons/logo.png')}></img>
        <p className="english">English</p>

      </div>
    </div>
  );
};

export default BeforFooter;
