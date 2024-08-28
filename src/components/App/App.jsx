import { useEffect, useState } from "react";
import { getPhotos } from "../../apiService/apiService";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("1");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { results: photos, total_results } = await getPhotos(query, page);

        if (!photos.length) {
          setIsEmpty(true);
        }
        setImages(prevImages => [...prevImages, ...photos]);
        setIsEmpty(false);
        setIsVisible(page < total_results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, query]);

  const onHandleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit} />

      {images.length > 0 && <ImageGallery images={images} />}
      {/* {!images.length && !isEmpty && <ErrorMessage textAlign="center">Let`s begin search 🔎</Text>} */}
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">
          ❌ Something went wrong - {error.message}
        </ErrorMessage>
      )}
      {isEmpty && (
        <ErrorMessage textAlign="center">
          Sorry. There are no images ... 😭
        </ErrorMessage>
      )}
    </div>
  );
}
