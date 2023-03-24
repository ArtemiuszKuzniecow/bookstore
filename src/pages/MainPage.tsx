import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { getAllBooks } from "../store/books/selectors";

const MainPage = () => {
  const books = useSelector(getAllBooks());
  return (
    books && (
      <div className="flex flex-wrap justify-center">
        {books.map((b) => (
          <BookCard _id={b._id} key={b._id} />
        ))}
      </div>
    )
  );
};

export default MainPage;
