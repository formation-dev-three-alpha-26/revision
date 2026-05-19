import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlants = createAsyncThunk(
  "plants/getall",

  async (_, { rejectWithValue }) => {
    try {
      let response = await axios.get("http://localhost:3000/api/plants");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
export const getonePlant = createAsyncThunk(
  "plants/getOne",

  async (plantid, { rejectWithValue }) => {
    try {
      let response = await axios.get(
        `http://localhost:3000/api/plants/${plantid}`,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

const plantslice = createSlice({
  name: "plants",

  initialState: {
    data: [],
    onePlant: {},
    error: null,
    searchvalue: "",
  },
  reducers: {
    setsearchvalue: (state, action) => {
      state.searchvalue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlants.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getPlants.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getonePlant.fulfilled, (state, action) => {
        state.onePlant = action.payload;
        state.error = null;
      })
      .addCase(getonePlant.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export const { setsearchvalue } = plantslice.actions;
export default plantslice.reducer;
