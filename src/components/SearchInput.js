import React, {useState, useEffect} from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

const SearchInput = props => {
  const [results, setResults] = useState([]);

  const fetchMovies = value => {
    return fetch(
      'http://www.omdbapi.com/?apikey=1ef89e9d&Type=movie&s=' + value
    ).then(response => response.json());
  };

  useEffect(() => {
    if (props.searchTerm.trim() !== '') {
      fetchMovies(props.searchTerm.trim()).then(response => {
        if (response !== undefined) {
          setResults(response.Search);
        }
      });
    }
  }, [props.searchTerm]);

  return (
    <div className='control'>
      <Combobox>
        <ComboboxInput
          selectOnClick
          className='input'
          onChange={props.handleSearchTermChange}
          style={{width: 500, margin: 0}}
          placeholder='Enter a Movie Title'
        />
        {results !== undefined && results.length > 0 && (
          <ComboboxPopover className='shadow-popup'>
            <ComboboxList
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgb(219, 219, 219)',
                borderRadius: '5px',
                fontSize: '.85em',
                width: '300px',
                padding: '.5rem',
                boxShadow: '1px 1px 2px lightgrey',
              }}>
              {results.map(movie => {
                const str = `${movie.Title} (${movie.Year})`;
                return <ComboboxOption key={movie.imdbID} value={str} />;
              })}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
    </div>
  );
};

export default SearchInput;
