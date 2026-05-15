import { configureStore } from "@reduxjs/toolkit";

import plantSlice from "./plantSlice";

export const store = configureStore({
  reducer: {
    plants: plantSlice,
  },
});
