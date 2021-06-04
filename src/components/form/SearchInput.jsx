function SearchInput(props) {
  const { searchQuery, handleChange } = props;

  return (
    <div className="search__group search__group_flex">
      <label htmlFor="movie" className="search__subtitle">
        Search Movies or serials
      </label>
      <input
        className="search__input"
        name="search"
        type="text"
        id="movie"
        onChange={handleChange}
        value={searchQuery}
      />
    </div>
  );
}

export default SearchInput;
