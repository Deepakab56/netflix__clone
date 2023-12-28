import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../utility/axios'
import { requests } from "../../utility/request"

const initialState = {
    videoDetails: {
        status: "idle",
        data: null,
        error: null
    }
}



export const fetchVideoDetails = createAsyncThunk(
    "movie/fetchHerdervideo",
    async (requestValue) => {

        const response = await axios.get(requests.getdetails(requestValue))
        return response.data
    }
)


export const detailSlice = createSlice({
    initialState,
    name:"moviedetils",
    reducers:{},
    extraReducers:(builder)=>{
        builder
        
          .addCase(fetchVideoDetails.pending, (state) => {
            state.videoDetails.status = "loading";
          })
          .addCase(fetchVideoDetails.fulfilled, (state, action) => {
            state.videoDetails.status = "success";
            state.videoDetails.data = action.payload;
          })
          .addCase(fetchVideoDetails.rejected, (state, action) => {
            state.videoDetails.status = "failed";
            state.videoDetails.error = action.error.message;
          });

    }
})


export const selectvideoDetails = (state)=>state.detail.videoDetails


export default detailSlice.reducer