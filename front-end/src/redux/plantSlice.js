import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlants = createAsyncThunk(
  "plants/getall",

  async () => {
    try {
      let response = await axios.get("http://localhost:3000/api/plants");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);
export const getonePlant = createAsyncThunk(
  "plants/getOne",

  async (plantid) => {
    try {
      let response = await axios.get(
        `http://localhost:3000/api/plants/${plantid}`,
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const plantslice = createSlice({
  name: "plants",

  initialState: {
    data: [],
    onePlant : {}
  },
  extraReducers: (builder) => {
    builder.addCase(getPlants.fulfilled, (state, action) => {
      state.data = action.payload;
    })
      .addCase(getonePlant.fulfilled, (state, action) => {
      state.onePlant = action.payload;
    });
  },
});

export default plantslice.reducer;
