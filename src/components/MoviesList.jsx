import MoviesItem from './MoviesItem';
import Preloader from './Preloader';

const MoviesList = ({ movies = [], isSearching }) => (
  <section className='search-results'>
    <div className='container'>
      {isSearching ? (
        <Preloader />
      ) : (
        <ul className='movies'>
          {movies.length ? (
            movies.map((movie) => <MoviesItem key={movie.imdbID} {...movie} />)
          ) : (
            <h3 className='movies__not-found'>Movies not found. Repeat search!</h3>
          )}
        </ul>
      )}
    </div>
  </section>
);

export default MoviesList;
