import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import SearchInput from '../components/SearchInput';

const AddMovie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newMovie, setNewMovie] = useState({id: null, title: ''});

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
    setNewMovie({...newMovie, title: e.target.value});
  };

  const handleAddNew = e => {
    e.preventDefault();

    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then(response => response.json())
      .then(navigate('/favorites'))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Add a New Favorite Movie</h1>
        </div>
      </section>

      <section className='section'>
        <form className='form' autoComplete='off'>
          <div className='field'>
            <SearchInput
              searchTerm={searchTerm}
              handleSearchTermChange={handleSearchTermChange}
            />
          </div>

          <div className='field is-grouped'>
            <div className='control'>
              <button className='button' onClick={handleAddNew}>
                Add
              </button>
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

export default AddMovie;
