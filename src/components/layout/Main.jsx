import { Component } from 'react';
import Search from '../Search';
import MoviesList from '../MoviesList';
import Categories from '../Categories';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      movies: [],
      isSearching: false,
      type: 'all',
      types: [
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
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRadio = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.searchMovies(event, this.state.searchQuery, this.state.type);
      },
    );
  };

  searchMovies = async (e, searchQuery, type = 'all') => {
    e.preventDefault();

    if (!searchQuery) return;

    try {
      this.setState({ isSearching: true });
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=d39f466e&s=${searchQuery}${
          type !== 'all' ? `&type=${type}` : ''
        }`,
      );
      const movie = await response.json();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      this.setState({ movies: movie.Search });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isSearching: false });
    }
  };

  componentDidMount() {
    this.setState({ isSearching: true });
    fetch('http://www.omdbapi.com/?apikey=d39f466e&s=matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((e) => console.log(e))
      .finally(() => this.setState({ isSearching: false }));
  }

  render() {
    const { searchMovies, handleChange, handleRadio } = this;
    const { searchQuery, types, type, movies, isSearching } = this.state;

    return (
      <main className='main-content'>
        <Search searchQuery={searchQuery} searchMovies={searchMovies} handleChange={handleChange} />
        {movies.length && searchQuery.length >= 4 ? (
          <Categories types={types} type={type} handleRadio={handleRadio} />
        ) : null}
        <MoviesList movies={movies} isSearching={isSearching} />
      </main>
    );
  }
}

export default Main;
