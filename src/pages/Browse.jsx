import Header from "../container/Header"
import useMovies from "../hooks/useMovies"
import { TMDB_API_URL } from "../constants/links";

const Browse = () => {
  const {movies, loading, error} = useMovies(TMDB_API_URL);
  console.log(movies, loading, error);
  
  return (
    <div className="flex flex-col justify-between gap-10">
      <Header btnName="logout"/>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default Browse