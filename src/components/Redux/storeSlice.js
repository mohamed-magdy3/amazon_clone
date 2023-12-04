import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
  total: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      !product && state.products.push(action.payload);
    },
    removeFromCart(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    removeAll(state,action) {
      state.products=[]
    },
    increaseQuantity(state, { payload }) {
      const item = state.products.find((item) => item.id === payload.id);
      if (item.amount >= 1) {
        item.amount++;
      }
    },

    deCreaseQuantity(state, { payload }) {
      const item = state.products.find((item) => item.id === payload.id);
      if (item.amount > 1) {
        item.amount -= 1;
      }
    },

    totalPrice(state) {
      let quantity = 0;
      let total = 0;
      state.products.map((item) => {
        quantity += item.amount;
        total += item.amount * item.price;
      });
      state.quantity = total;
      state.total = total;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  deCreaseQuantity,
  removeFromCart,
  removeAll,
  totalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
