import Places from "./Places.jsx";
import {useState, useEffect} from "react";
import ErrorPage from "./Error.jsx";

export default function AvailablePlaces({onSelectPlace}) {
  const [isFeatching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new ErrorPage("Failed to fetch places");
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message: error.message || "Could not fetch places, please try again later.",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();

    // Another aproach
    // fetch("http://localhost:3000/places")
    // .then((response) => {
    //   return response.json();
    // })
    // .then((resData) => {
    //   setAvailablePlaces(resData.places);
    // });
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFeatching}
      loadingText="Fetaching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
