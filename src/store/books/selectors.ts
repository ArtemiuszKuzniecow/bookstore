import { RootStore } from "./../rootReducer";

export const getAllBooks = () => (state: RootStore) => state.booksData.books;
export const getIsLoading = () => (state: RootStore) =>
  state.booksData.isLoading;
export const getFavouites = () => (state: RootStore) =>
  state.booksData.favourites;
export const getCart = () => (state: RootStore) => state.booksData.cart;
