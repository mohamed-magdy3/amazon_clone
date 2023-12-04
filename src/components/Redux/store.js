import { configureStore } from "@reduxjs/toolkit";
import  cartSlice from "./storeSlice";



 const store = configureStore({
    reducer: {
        cart: cartSlice
    }
    
})

export default store