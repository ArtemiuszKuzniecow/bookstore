import * as React from "react";
import { useSelector } from "react-redux";
import BookCartCard from "../components/BookCartCard";
import { getAllBooks, getCart } from "../store/books/selectors";

const CartPage = () => {
  const books = useSelector(getAllBooks());
  const cart = useSelector(getCart());
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
      {cart.length ? (
        <div className="flex flex-col justify-between h-full">
          {books?.map((b) => {
            if (cart.includes(b._id)) {
              return <BookCartCard _id={b._id} key={b._id} />;
            }
          })}
          <div
            className="ml-auto flex flex-col"
            onMouseOver={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <button className="mt-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 rounded-xl">
              Оформить заказ
            </button>
            {isVisible && <span className="ml-auto">В разработке</span>}
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <span>Добавтье любимые книги в корзину!</span>
        </div>
      )}
    </div>
  );
};

export default CartPage;
