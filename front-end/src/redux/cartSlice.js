import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const add = createAsyncThunk(
  "cart/add",

  async (plantId, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/api/cart/add",
        plantId,

        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch(getCart());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const getCart = createAsyncThunk(
  "cart/get",

  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:3000/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const deletePlant = createAsyncThunk(
  "cart/delete",

  async (plantId, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3000/api/cart/${plantId}`,

        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch(getCart());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const updatePlant = createAsyncThunk(
  "cart/update",

  async ({ id, quantity }, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:3000/api/cart/${id}`,
        { quantity: quantity },

        { headers: { Authorization: `Bearer ${token}` } },
      );

      dispatch(getCart());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const cartSlice = createSlice({
  name: "carts",

  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.data = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        console.log(action.payload);
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = action.payload;
      })
        .addCase(add.fulfilled, (state, action) => {
        state.error = null
      })
      .addCase(add.rejected, (state, action) => {
        state.error = action.payload;
      })
        .addCase(deletePlant.fulfilled, (state, action) => {
        state.error = null
      })
      .addCase(deletePlant.rejected, (state, action) => {
        state.error = action.payload;
      })
       .addCase(updatePlant.fulfilled, (state, action) => {
        state.error = null
      })
       .addCase(updatePlant.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});
export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
