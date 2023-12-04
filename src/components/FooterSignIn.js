import React from "react";
import { Link } from "react-router-dom";


const FooterSignIn = () => {
  return (
    <div className="FooterSignIn" data-aos="fade-up">
      <div className="FooterSignIn-container">
        <p className="text-bold">See personalized recommendations</p>
        <Link to='/login'>
          <button>Sign In</button>
        </Link>
        <p>
          New Customber? <span className="">start here</span>
        </p>
      </div>
    </div>
  );
};

export default FooterSignIn;
