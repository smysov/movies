import MoviesItem from './MoviesItem';
import Preloader from './Preloader';

function MoviesList(props) {
  const { movies, isSearching } = props;
  return (
    <section className='search-results'>
      <div className='container'>
        {isSearching ? (
          <Preloader />
        ) : (
          <ul className='movies'>
            {movies ? (
              <MoviesItem movies={movies} />
            ) : (
              <h3 className='movies__not-found'>Movies not found</h3>
            )}
          </ul>
        )}
      </div>
    </section>
  );
}

export default MoviesList;
