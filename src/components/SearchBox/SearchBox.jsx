import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, Button } from './SearchBox.styled';
import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

export const Searchbox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = evt => setQuery(evt.target.value.toLowerCase());

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      return toast.error('Please enter something');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSearchSubmit}>
        <Button type="submit">
          <FiSearch />
        </Button>

        <Input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleQueryChange}
        />
      </Form>
      <Toaster />
    </>
  );
};

Searchbox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
