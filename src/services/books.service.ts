import httpService from "./http.service";

const booksService = {
  getAllBooks: async () => {
    const { data } = await httpService.get("books");
    return data;
  },
};

export default booksService;
