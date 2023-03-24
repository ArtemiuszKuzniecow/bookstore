import * as React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import { getAllBooks, getFavouites } from "../store/books/selectors";

const FavouritesPage = () => {
  const books = useSelector(getAllBooks());
  const favourites = useSelector(getFavouites());

  return (
    <CardWrapper>
      {favourites.length ? (
        books?.map((b) => {
          if (favourites.includes(b._id)) {
            return <BookCard _id={b._id} key={b._id} />;
          }
        })
      ) : (
        <span>Добавтье любимые книги в избранное!</span>
      )}
    </CardWrapper>
  );
};

export default FavouritesPage;
