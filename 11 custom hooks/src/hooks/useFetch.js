import { useEffect, useState } from "react";
// custom hook
export function useFetch(fecthFun, initialValue) {           // here fetchFun is nothing but to fetch the data from the backend
  const [isFecthing, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fecthData() {
      setIsFetching(true);
      try {
        const data = await fecthFun();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fecthData();
  }, [fecthFun]);

  return {
    isFecthing,
    error,
    fetchedData,
    setFetchedData,
    setIsFetching
  }
}
