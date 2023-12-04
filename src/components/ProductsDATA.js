import React, { useReducer, useState } from "react";
import ProductAPI from "./ProductAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/storeSlice";




const ProductsDATA = ({category,description,image,price,title,handleToCart}) => {
 


  return (
    <div className="container" data-aos="fade-in">
      <div className="product-container" >
        <h6 className="category">{category}</h6>
        <div className="product-img">
          <img src={image} />
        </div>
        <div className="title-price">
          <h6 className="title">{title}</h6>
          <h6 className="price">$ {price}</h6>
        </div>

        <h6 className="desc">{description}</h6>
        <button className="btn-add" onClick={handleToCart}>Add to cart</button>
        <div></div>
      </div>
    </div>
  );
};

export default ProductsDATA;
