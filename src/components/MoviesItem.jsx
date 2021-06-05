function MoviesItem(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
   } = props;
  return (
    <li className='movies__item' key={id}>
      {poster === 'N/A' ? (
        <img className='movies__image' src='no-image.png' alt='Poster' />
      ) : (
        <img className='movies__image' src={poster} alt='Poster' />
      )}
      <h2 className='movies__title'>{title}</h2>
      <p className='movies__type'>{type}</p>
      <span className='movies__year'>{year}</span>
    </li>
  );
}

export default MoviesItem;
