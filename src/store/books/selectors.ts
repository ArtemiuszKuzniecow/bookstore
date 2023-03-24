import { RootStore } from "./../rootReducer";

export const getAllBooks = () => (state: RootStore) => state.booksData.books;
export const getBookById = (_id: string) => (state: RootStore) => {
  if (state.booksData.books) {
    const currentBook = state.booksData.books.find(
      (b: { _id: string }) => b._id === _id
    );
    return currentBook;
  }
};
export const getIsLoading = () => (state: RootStore) =>
  state.booksData.isLoading;
export const getFavouites = () => (state: RootStore) =>
  state.booksData.favourites;
export const getCart = () => (state: RootStore) => state.booksData.cart;
