import Places from "./Places.jsx";
import {useState, useEffect} from "react";

export default function AvailablePlaces({onSelectPlace}) {
  const [isFeatching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
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
