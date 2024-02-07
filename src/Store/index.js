import { configureStore } from "@reduxjs/toolkit";
import toDoSliceReducer from "./toDoSlice";


const store = configureStore({
    reducer: { toDoSliceReducer }
})

export default store