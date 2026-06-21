import { configureStore } from "@reduxjs/toolkit";
import sldItemReducer from "./slice/selected_item";
import moviesReducer from "./slice/movies";

const store = configureStore({
  reducer: { selectedItem: sldItemReducer, movies: moviesReducer },
});

export default store;
