
const getBestFilm = (movies) => {
   let bestFilm = null;
   let rating = 0;

   movies.forEach(film => {
    if (film.vote_average > rating) {
        rating = film.vote_average;
        bestFilm = film;
    }
   });
   return bestFilm;
}

export default getBestFilm