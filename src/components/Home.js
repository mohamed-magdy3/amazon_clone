import React from "react";
import Header from "./Header";
import HeaderSlider from "./HeaderSlider";
import Products from "./Products";
import UnderHeader from "./UnderHeader";
import BeforFooter from "./BeforFooter";
import Footer from "./Footer";
import {Example} from "./OffCanvas";
import FooterSignIn from "./FooterSignIn";
import Marqee from "../Marqee";

const Home = () => {
  return (
    <div>
      <Header />
      <Example />
      <Marqee/> 
      <HeaderSlider />
      <Products />
      <FooterSignIn/>
      <BeforFooter />
      <Footer />
    </div>
  );
};

export default Home;
