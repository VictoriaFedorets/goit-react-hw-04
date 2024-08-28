import styles from "./ImageCard.module.css"; // Optional, for styling

export default function ImageCard({ src, alt }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
}
