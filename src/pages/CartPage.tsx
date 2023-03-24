import * as React from "react";
import { useSelector } from "react-redux";
import BookCartCard from "../components/BookCartCard";
import { getAllBooks, getCart } from "../store/books/selectors";

const CartPage = () => {
  const books = useSelector(getAllBooks());
  const cart = useSelector(getCart());
  return (
    <div>
      {cart.length ? (
        books?.map((b) => {
          if (cart.includes(b._id)) {
            return <BookCartCard _id={b._id} />;
          }
        })
      ) : (
        <span>Add some books</span>
      )}
    </div>
  );
};

export default CartPage;
