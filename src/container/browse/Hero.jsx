import { useSelector } from "react-redux"
import getBestFilm from "../../utils/getBestFilm";
import VideoTitle from "../../components/browse/VideoTitle";
import VideoBackground from "../../components/browse/VideoBackground";

const Hero = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null) return;

    const bestFilm = getBestFilm(movies);
    const {original_title, overview} = bestFilm;
  return (
    <div>
        {/* <VideoTitle title={original_title} overview={overview} /> */}
        <VideoBackground />
    </div>
  )
}

export default Hero