import SearchInput from './search/SearchInput';
import SubmitButton from './search/SubmitButton';

const Form = ({ searchQuery, handleChange, searchMovies }) => (
  <section className='search-movies'>
    <div className='container'>
      <form className='search' onSubmit={(e) => searchMovies(e, searchQuery)}>
        <SearchInput searchQuery={searchQuery} handleChange={handleChange} />
        <SubmitButton />
      </form>
    </div>
  </section>
);

export default Form;
