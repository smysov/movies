function MoviesItem(props) {
  const { movies } = props;
  return !movies
    ? null
    : movies.map((movie) => (
        <li className='movies__item' key={movie.imdbID}>
          {movie.Poster === 'N/A' ? (
            <img className='movies__image' src='no-image.png' alt='Poster' />
          ) : (
            <img className='movies__image' src={movie.Poster} alt='Poster' />
          )}
          <h2 className='movies__title'>{movie.Title}</h2>
          <p className='movies__type'>{movie.Type}</p>
          <span className='movies__year'>{movie.Year}</span>
        </li>
      ));
}

export default MoviesItem;
