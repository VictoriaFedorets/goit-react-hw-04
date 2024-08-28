import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div>
      <ClipLoader
        color="blue"
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
