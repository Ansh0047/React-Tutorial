import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  // so here we are managing these 3 states first one checks if the data is being fecthed or not 
  // another one get the list of repsonse data and
  // last one is to handle the error
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  /* 
  // this hook is just to prevent the infinite loop execution
  useEffect(() => {
    // used to send http requests to some other server 
    // we can use it fetch and send the data
    fetch("http://localhost:3000/places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      });
  }, []);
  */

  // alternative way to fetch data
  // using the async and await
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/placeggfs");
        const resData = await response.json();

        // handling the http errors
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        // handle the error
        setError({message: error.message || 'Could not fetch places, please try again later.'});
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if(error){
    return <Error title="An error occured!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
