import SearchInput from './form/SearchInput';
import SubmitButton from './form/SubmitButton';

function Form(props) {
  const { searchQuery, handleChange, searchMovies } = props;

  return (
    <section className='search-movies'>
      <div className='container'>
        <form className='search' onSubmit={(e) => searchMovies(e, searchQuery)}>
          <SearchInput searchQuery={searchQuery} handleChange={handleChange} />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
export default Form;
