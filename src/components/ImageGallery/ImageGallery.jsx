import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallary({ images }) {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, urls, alt_description }) => (
        <ImageCard key={id} src={urls.small} alt={alt_description} />
      ))}
    </ul>
  );
}
