import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requests } from "../../utility/request"
import axios from '../../utility/axios'
const initialState = {
    headersvideo: {
        status: "idle",
        data: null,
        error: null
    }
   
}



export const fetchHeadervideo = createAsyncThunk(
    "movie/fetchHerdervideo",
    async (requestValue) => {

        const response = await axios.get(requests.getdetails(requestValue))
        return response.data
    }
)




export const commonSlice = createSlice({
    initialState,
    name: "common",
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchHeadervideo.pending, (state) => {
          state.headersvideo.status = "loading";
        })
        .addCase(fetchHeadervideo.fulfilled, (state, action) => {
          state.headersvideo.status = "success";
          state.headersvideo.data = action.payload;
        })
        .addCase(fetchHeadervideo.rejected, (state, action) => {
          state.headersvideo.status = "failed";
          state.headersvideo.error = action.error.message;
        })
        

    }
})


export const selectheadervideo = (state)=>state.common.headersvideo



export default commonSlice.reducer