import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice.js"
import searchSlice from "./searchSlice.js"
import chatSlice from "./chatSlice.js";
import videosSearch from "./videosSearch.js"
const store=configureStore({
    reducer:{
     app:appSlice,
     search:searchSlice,
     chat:chatSlice,
     videos:videosSearch,
    },

})
export default store;