import React, { useEffect, useId, useReducer, useState } from "react";
import axios from "axios";
import ProductsDATA from "./ProductsDATA";
import ProductAPI from "./ProductAPI";
import { CartProvider, useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Redux/storeSlice";

const Products = () => {
  const [product, setProduct] = useState(ProductAPI);

  
  

  const dispatch = useDispatch();

  const handleToCart = (item)=>{
    dispatch(addToCart(item))
    console.log('this from redux');
  }


  return (
    <div className="container-parent " >
      {product.map((item, index) => {
        return (
          <ProductsDATA
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
            title={item.title}
            key={index}
            handleToCart={()=>handleToCart(item)}
          />
        );
      })}
    </div>
  );
};

export  default Products;
