import { useEffect, useRef, useState } from "react";
import { getPhotos } from "../../apiService/apiService";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page
        );
        if (!photos.length) {
          return setIsEmpty(true);
        }
        setImages(prevImages => [...prevImages, ...photos]);
        setIsVisible(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, query]);

  const [query, setQuery] = useState("");
  const onHandleSubmit = value => {
    setQuery(value);
  };

  return (
    <div>
      <h1>dfcgvhb</h1>
      <SearchBar onSubmit={onHandleSubmit} />
    </div>
  );
}
