import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

const cache = {};
function fetchMovies(value) {
  if (cache[value]) {
    return Promise.resolve(cache[value]);
  }
  return fetch('http://www.omdbapi.com/?apikey=1ef89e9d&Type=movie&s=' + value)
    .then(res => res.json())
    .then(result => {
      cache[value] = result;
      return result;
    });
}

function useMovieSearch(searchTerm) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchMovies(searchTerm).then(response => {
        if (response !== undefined) {
          setResults(response.Search);
        }
      });
    }
  }, [searchTerm]);

  return results;
}

const ServerMovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  const movies = useMovieSearch(searchTerm);

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Add a New Favorite Movie</h1>
        </div>
      </section>

      <section className='section'>
        <form className='form' autocomplete='off'>
          <div className='field'>
            <label className='label'>Movie Title:</label>
            <div className='control'>
              <Combobox>
                <ComboboxInput
                  className='input'
                  onChange={handleSearchTermChange}
                  style={{width: 500, margin: 0}}
                  // aria-label='Movies'
                />
                {movies !== undefined && movies.length > 0 && (
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
                      {movies.map(movie => {
                        const str = `${movie.Title} (${movie.Year})`;
                        return <ComboboxOption key={movie.imdbID} value={str} />;
                      })}
                    </ComboboxList>
                  </ComboboxPopover>
                )}
              </Combobox>
            </div>
          </div>

          <div className='field is-grouped'>
            <div className='control'>
              <Link to='/favorites'>
                <button className='button'>Add</button>
              </Link>
            </div>
            <div className='control'>
              <Link to='/favorites'>
                <button className='button'>Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ServerMovieSearch;
