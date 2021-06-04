import React, { Component } from 'react';
import SearchInput from './form/SearchInput';
import SubmitButton from './form/SubmitButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <SearchInput searchQuery={this.state.searchQuery} handleChange={this.handleChange} />
        <SubmitButton />
      </form>
    );
  }
}
export default Form;
