import React, {Component} from 'react';

class SearchInput extends Component {
  constructor() {
    super();

    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
      return (
        <div className='search__group search__group_flex'>
          <label htmlFor='movie' className='search__subtitle'>
            Search Movies or serials
          </label>
          <input
            className='search__input'
            name='search'
            type='text'
            id='movie'
            onChange={this.props.handleChange}
            value={this.props.searchQuery}
            ref={this.input}
          />
        </div>
      );
  }
}

export default SearchInput;
