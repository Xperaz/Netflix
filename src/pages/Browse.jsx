import Header from "../container/Header"
import useMovies from "../hooks/useMovies"
import { TMDB_API_URL } from "../constants/links";
import Hero from '../container/browse/Hero';
import Movies from "../container/browse/Movies"

const Browse = () => {
  const {loading, error} = useMovies(TMDB_API_URL);
  
  return (
    <div className="w-full h-full">
      <div className="relative h-12">
        <Header btnName="logout"/>
      </div>

      <Hero />
      <Movies />
    </div>
  )
}

export default Browse

// Main video part
//   - Header
//   - Hero => (video title and )
//   - 
// Films section part
  // - Movies list * n
        // - Cards * n