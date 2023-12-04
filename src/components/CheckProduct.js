import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deCreaseQuantity,
  increaseQuantity,
  removeAll,
  removeFromCart,
  totalPrice,
} from "./Redux/storeSlice";
import { Button } from "react-bootstrap";

const CheckProduct = () => {
  const product = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, [product]);

  const increaseQty = (item) => {
    dispatch(increaseQuantity(item));
  };
  const decreaseQty = (decrease) => {
    dispatch(deCreaseQuantity(decrease));
  };

  const removeItems = () => {
    dispatch(removeAll());
  };
  const removeItem = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="checkOut">
      <div className="Shopping-Cart">
        <div className="Shopping-Cart-inside">
          {product.map((item) => {
            return (
              <div className="cart-items pt-4 ">
                <div className="img-item">
                  <img src={item.image}></img>
                </div>
                <div className="disciption">
                  <h5 className="text-bold">{item.title}</h5>
                  <h6 className="mt-3 text-muted">{item.description}</h6>
                  <div className="d-flex align-items-center mt-4 unit-price">
                    <h6 className="">
                      {" "}
                      Unit Price :{" "}
                      <span className="text-bold ">${item.price}</span>
                    </h6>
                  </div>

                  <div className="quantity-container mt-3">
                    <span>Quantity : </span>
                    <Button size="sm" onClick={() => decreaseQty(item)}>
                      &minus;
                    </Button>
                    <span className="p-1 qty-number">{item.amount}</span>
                    <Button size="sm" onClick={() => increaseQty(item)}>
                      &#43;
                    </Button>
                  </div>
                  <Button
                    variant="danger mt-4"
                    onClick={() => removeItem(item)}
                  >
                    Delete Product
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-clear-items">
          <Button
            variant="danger"
            className="mt-3"
            onClick={() => removeItems()}
          >
            Clear Items
          </Button>
        </div>
      </div>

      <div className="orders p-4 ">
        <div className="d-flex">
          <i class="fa-solid fa-check h5" style={{ color: "#10eb00" }}></i>
          <h6 class="ms-3 text-muted h6">
            Your order qualifies for FREE Shipping Choose this option at
            checkout. See details....
          </h6>
        </div>

        <div className="total-price d-flex align-items-center mt-3 ">
          <h5>total : </h5>
          <h5 className="text-bold "> ${total.toFixed(2)}</h5>
        </div>
        <div className="text-center mt-2">
          <Button variant="warning w-100 ">Proceed to Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckProduct;
