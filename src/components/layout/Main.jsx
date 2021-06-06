import { useState, useEffect } from 'react';
import Search from '../Search';
import MoviesList from '../MoviesList';
import Categories from '../Categories';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [type, setType] = useState('all');
  const [types] = useState([
    {
      id: 'all',
      for: 'all',
      title: 'All',
      name: 'type',
      value: 'all',
    },
    {
      id: 'movies',
      for: 'movies',
      title: 'Only movies',
      name: 'type',
      value: 'movie',
    },
    {
      id: 'serials',
      for: 'serials',
      title: 'Only serials',
      name: 'type',
      value: 'series',
    },
  ]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRadio = async (event) => {
    setType(event.target.value);
    searchMovies(event, searchQuery, event.target.value);
  };

  const searchMovies = async (e, searchQuery, type='all') => {
    e.preventDefault();

    if (!searchQuery) return;

    try {
      setIsSearching(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}${
          type !== 'all' ? `&type=${type}` : ''
        }`,
      );
      const movie = await response.json();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      setMovies(movie.Search);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    setIsSearching(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .catch((e) => console.log(e))
      .finally(() => setIsSearching(false));
  }, []);

  return (
    <main className='main-content'>
      <Search searchQuery={searchQuery} searchMovies={searchMovies} handleChange={handleChange} />
      {movies && searchQuery.length >= 4 ? (
        <Categories types={types} type={type} handleRadio={handleRadio} />
      ) : null}
      <MoviesList movies={movies} isSearching={isSearching} />
    </main>
  );
}

export default Main;
