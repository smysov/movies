import { Component } from 'react';
import Form from '../Form';
import MoviesList from '../MoviesList';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      movies: null,
      isSearching: false,
    };
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  searchMovies = async (e, searchQuery) => {
    e.preventDefault();

    try {
      this.setState({ isSearching: true });
      const response = await fetch(`http://www.omdbapi.com/?apikey=d39f466e&s=${searchQuery}`);
      const movie = await response.json();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      this.setState({ movies: movie.Search, searchQuery: '' });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isSearching: false });
    }
  };

  render() {
    return (
      <main className='main-content'>
        <Form
          searchQuery={this.state.searchQuery}
          searchMovies={this.searchMovies}
          handleChange={this.handleChange}
        />

        <MoviesList movies={this.state.movies} isSearching={this.state.isSearching} />
      </main>
    );
  }
}

export default Main;
