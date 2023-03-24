import * as React from "react";
import { useSelector } from "react-redux";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import { getBookById } from "../store/books/selectors";

const BookCartCard = ({ _id }: { _id: string }) => {
  const currentBook = useSelector(getBookById(_id));
  return (
    <>
      <div className="flex justify-between m-3">
        <div className="flex gap-2">
          <img src={currentBook?.cover} width={100} />
          <div className="flex flex-col">
            <span>{currentBook?.author}</span>
            <span>{currentBook?.title}</span>
            <span>{currentBook?.price}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[25px] text-center">&#10006;</span>
          <div>
            <FavouriteIcon color="black" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BookCartCard;
