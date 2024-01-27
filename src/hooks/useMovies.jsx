import { useEffect, useState } from "react";

const useMovies = (TMDB_API_URL) => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
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
                setMovies(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }

          }
          getData();
      }, [TMDB_API_URL]);

  return {movies, loading, error};
}

export default useMovies