import { createSlice } from "@reduxjs/toolkit";

const videosSearch=createSlice({

    name:"videosSearch",
    initialState:{
        searchedVideos:[],
    },
    reducers:{
        addVideos:(state,action)=>{
            state.searchedVideos=action.payload
        }
    }
})

export const {addVideos}=videosSearch.actions
export default videosSearch.reducer
