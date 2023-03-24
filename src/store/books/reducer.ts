import { loadBooksData } from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  books: null,
  cart: localStorage.getItem("cart") || null,
  favourites: localStorage.getItem("favs") || null,
  errors: null,
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {},
  extraReducers: {
    [loadBooksData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loadBooksData.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    },
    [loadBooksData.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    },
  },
});
