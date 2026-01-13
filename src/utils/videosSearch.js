import { createSlice } from "@reduxjs/toolkit";

const videosSearch=createSlice({

    name:"videosSearch",
    initialState:{
        searchedVideos:[],
        mostPopularVideos:null,
        watchPageVideos:[],
    },
    reducers:{
        addVideos:(state,action)=>{
            state.searchedVideos=action.payload
        },
        addMostPopularVideos:(state,action)=>{
             state.mostPopularVideos=action.payload
        },
        addWatchPageVideos:(state,action)=>{
            state.watchPageVideos=action.payload
        },

    }
})

export const {addVideos,addMostPopularVideos,addWatchPageVideos}=videosSearch.actions
export default videosSearch.reducer
