import * as React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import CardWrapper from "../components/CardWrapper";
import { getAllBooks } from "../store/books/selectors";

const MainPage = () => {
  const books = useSelector(getAllBooks());
  return (
    books && (
      <CardWrapper>
        {books.map((b) => (
          <BookCard _id={b._id} key={b._id} />
        ))}
      </CardWrapper>
    )
  );
};

export default MainPage;
