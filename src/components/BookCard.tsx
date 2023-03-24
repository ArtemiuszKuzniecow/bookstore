import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../assets/icons/CartIcon";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import { BooksSlice } from "../store/books/reducer";
import { getBookById, getCart, getFavouites } from "../store/books/selectors";
import { toggleLocalStorage } from "../utils/toggleLocalStorage";
import NavigateWrapper from "./NavigateWrapper";

const BookCard = ({ _id }: { _id: string }) => {
  const favourites = useSelector(getFavouites());
  const cart = useSelector(getCart());
  const currentBook = useSelector(getBookById(_id));
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = React.useState(
    favourites.includes(_id)
  );
  const [isInCart, setIsInCart] = React.useState(cart.includes(_id));

  return currentBook ? (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-2 m-2 w-[300px]  flex flex-col items-center   rounded-xl">
      <div className="bc-light w-full h-[250px] flex justify-center items-center rounded-t-xl">
        <NavigateWrapper path={`book/${_id}`}>
          <img src={currentBook.cover} width={150} height="auto" />
        </NavigateWrapper>
      </div>
      <NavigateWrapper path={`book/${_id}`}>
        <div className="flex flex-col word-break ">
          <span className="color-brown">{currentBook.author}</span>
          <span className="color-dark font-semibold">{currentBook.title}</span>
        </div>
      </NavigateWrapper>
      <div className="max-w-[250px] flex justify-between w-full items-center">
        <span>{currentBook.price}</span>
        <div className="flex items-center">
          <div
            className="hover:bg-gray-100 rounded-full cursor-pointer"
            onClick={() => {
              toggleLocalStorage(currentBook._id, "favs");
              dispatch(
                BooksSlice.actions.updateFavourites(
                  JSON.parse(localStorage.getItem("favs") || "[]")
                )
              );
              setIsFavourite((prevState) => !prevState);
            }}
          >
            <FavouriteIcon color={isFavourite ? "#ffc0cb" : "#452400"} />
          </div>
          <div
            className="hover:bg-gray-100 p-1 rounded-full cursor-pointer"
            onClick={() => {
              toggleLocalStorage(currentBook._id, "cart");
              dispatch(
                BooksSlice.actions.updateFavourites(
                  JSON.parse(localStorage.getItem("cart") || "[]")
                )
              );
              setIsInCart((prevState) => !prevState);
            }}
          >
            <CartIcon color={isInCart ? "#ffc0cb" : "#452400"} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Книга не найдена</h1>
  );
};

export default BookCard;
