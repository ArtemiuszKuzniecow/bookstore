import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BooksSlice } from "../store/books/reducer";
import { getBookById, getFavouites } from "../store/books/selectors";
import { toggleLocalStorage } from "../utils/toggleLocalStorage";

const useFavourites = (_id: string) => {
  const favourites = useSelector(getFavouites());
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = React.useState(
    favourites.includes(_id)
  );
  const currentBook = useSelector(getBookById(_id));

  const toggleFavouritesButton = () => {
    if (currentBook) {
      toggleLocalStorage(currentBook._id, "favs");
      dispatch(
        BooksSlice.actions.updateFavourites(
          JSON.parse(localStorage.getItem("favs") || "[]")
        )
      );
      setIsFavourite((prevState) => !prevState);
    }
  };

  return { toggleFavouritesButton, isFavourite };
};

export default useFavourites;
