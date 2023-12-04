import React, { useEffect } from "react";
import Header from "./Header";
import UnderHeader from "./UnderHeader";
import ProductAPI from "./ProductAPI";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  deCreaseQuantity,
  removeFromCart,
  totalPrice,
  removeAll,
} from "./Redux/storeSlice";
import CheckProduct from "./CheckProduct";
import CheckEmptyCart from "./CheckEmptyCart";

const Checkout = () => {
  const product = useSelector((state) => state.cart.products);

  return (
    <>
      <Header />
      <UnderHeader />
      <div>{product.length ? <CheckProduct /> : <CheckEmptyCart />}</div>
    </>
  );
};

export default Checkout;
