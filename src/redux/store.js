import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import wishlistReducer from "./slice/wishlistSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export default store;

