import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';

const Add = props => {
  const [movie, setMovie] = useState({id: null, title: ''});

  const handleChange = e => {
    setMovie({...movie, title: e.target.value});
  };

  const handleAddNew = e => {
    e.preventDefault();

    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
      .then(response => response.json())
      .then(res => navigate('/favorites'))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Add a New Favorite Movie</h1>
        </div>
      </section>

      <section className='section columns'>
        <form className='form column is-one-third'>
          <div className='field'>
            <label className='label'>Movie Title:</label>
            <div className='control'>
              <input
                type='text'
                className='input'
                placeholder='Enter a Movie Title'
                value={movie.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='field is-grouped'>
            <div className='control'>
              <Link to='/favorites'>
                <button className='button' onClick={handleAddNew}>
                  Add
                </button>
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

export default Add;
