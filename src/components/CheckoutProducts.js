import React from "react";
import ProductAPI from "./ProductAPI";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";

const CheckoutProducts = () => {
    const product= useSelector(state => state.cart.products)
  console.log(product);

  return (
    <div>
      <Header />
      <UnderHeader />
      {product.map((item) => {
        return <Checkout price={item.price} />;
      })}
    </div>
  );
};

export default CheckoutProducts;
