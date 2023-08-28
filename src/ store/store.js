import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, // nick name of cartReducer is cart we have set
  },
});

export default store;
