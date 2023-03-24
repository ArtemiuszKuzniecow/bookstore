import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "./../../types/stateType";
import { loadBooksData } from "./actions";

const cartValue = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") || "[]")
  : [];
const favsValue = localStorage.getItem("favs")
  ? JSON.parse(localStorage.getItem("favs") || "[]")
  : [];

const initialState: StateType = {
  isLoading: true,
  books: null,
  cart: cartValue,
  favourites: favsValue,
  errors: null,
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    updateFavourites: (state, action: PayloadAction<string[]>) => ({
      ...state,
      favourites: action.payload,
    }),
    updateCart: (state, action: PayloadAction<string[]>) => ({
      ...state,
      cart: action.payload,
    }),
  },
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
