import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utility/axios";
import { requests } from "../../utility/request";

const initialState = {
  netflixoriginals: {
    status: "idle",
    data: null,
    error: null,
  },
};

export const fetchNetflixOriginal = createAsyncThunk(
  "tv/fetchNetflixOriginal",
  async () => {
    const response = await axios.get(requests.getNetflixOriginal);
    return response.data;
  }
);

export const tvSlice = createSlice({
  initialState,
  name: "tv",
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchNetflixOriginal.pending, (state, action) => {
        state.netflixoriginals.status = "loading";
    })
    .addCase(fetchNetflixOriginal.fulfilled, (state, action) => {
        state.netflixoriginals.status = "success";
        state.netflixoriginals.data = action.payload;
    })
    .addCase(fetchNetflixOriginal.rejected, (state, action) => {
        state.netflixoriginals.status = "failed";
        state.netflixoriginals.error = action.error;
    })

  },
});

// ====================> selector data

export const selectNetflixOriginals = (state)=>state.tv.netflixoriginals

export default tvSlice.reducer;
