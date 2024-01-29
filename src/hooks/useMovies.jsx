import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../state/moviesSlice";

const useMovies = (TMDB_API_URL) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
          const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
              }
            };
          const getData = async () => {
            try {
                const response = await fetch(`${TMDB_API_URL}`, options);
                const data = await response.json();
                dispatch(addNowPlayingMovies(data.results));
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
          }
          getData();
      }, [TMDB_API_URL, dispatch]);

  return {loading, error};
}

export default useMovies