import { configureStore } from "@reduxjs/toolkit";

import plantSlice from "./plantSlice";
import userSlice from "./userSlice"
import cartSlice from "./cartSlice"
export const store = configureStore({
  reducer: {
    plants: plantSlice,
    users : userSlice , 
    carts : cartSlice
  },
});
