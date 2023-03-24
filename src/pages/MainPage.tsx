import * as React from "react";
import booksService from "../services/books.service";

const MainPage = () => {
  const [books, setBooks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  async function loadBooks() {
    setIsLoading(true);
    const result = await booksService.getAllBooks();
    setBooks(result);
    setIsLoading(false);
    return result;
  }
  React.useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      {!isLoading
        ? Object.values(books).map((b: { title: string }) => b.title)
        : "Loading..."}
    </div>
  );
};

export default MainPage;
