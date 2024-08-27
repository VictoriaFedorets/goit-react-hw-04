import axios from "axios";

const API_KEY = "mj37NY3H-sIFFcw4OqLcFSNvC9sTckof4I6GPoNBDZk";
axios.default.baseURL = "https://api.unsplash.com/search/photos";
axios.default.headers.common["Autorization"] = API_KEY;
axios.default.params = {
  orientation: "landscape",
  query,
  page,
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};
