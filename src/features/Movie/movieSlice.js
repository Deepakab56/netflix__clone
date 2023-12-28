import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints, platformType, requests } from "../../utility/request";
import axios from '../../utility/axios'

const initialState = {
  nowplaying: {
    status: "idle",
    data: null,
    error: null,
  },
};

export const fetchgetnowplaying = createAsyncThunk(
  "movie/getnowplaying",
  async () => {
    const response = await axios.get(
      requests.getnowplaying(platformType.movie, endpoints.now_playing)
    );
    return response.data;
  }
);

export const movieSlice = createSlice({
  initialState,
  name: "movie",
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchgetnowplaying.pending, (state, action) => {
        state.nowplaying.status = "loading";
    })
    .addCase(fetchgetnowplaying.fulfilled, (state, action) => {
        state.nowplaying.status = "success";
        state.nowplaying.data = action.payload;
    })
    .addCase(fetchgetnowplaying.rejected, (state, action) => {
        state.nowplaying.status = "failed";
        state.nowplaying.error = action.error;
    })
  },
});


export default movieSlice.reducer


export const  selectgetnowplaying = state=>state.movie.nowplaying