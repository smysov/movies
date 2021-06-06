import { useEffect, useRef } from 'react';

const SearchInput = ({ searchQuery, handleChange }) => {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  });

  return (
    <div className='search__group search__group_flex'>
      <label htmlFor='movie' className='search__subtitle'>
        Search Movies or serials
      </label>
      <input
        className='search__input'
        name='searchQuery'
        type='text'
        id='movie'
        onChange={handleChange}
        value={searchQuery}
        ref={input}
      />
    </div>
  );
};

export default SearchInput;
