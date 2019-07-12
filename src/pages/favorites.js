import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import {map} from 'ramda';

const Favorites = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/favorites')
      .then(response => response.json())
      .then(res => setMovies(res));
  }, []);

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Your Favorite Movies</h1>
          {/* <Link to='/favorites/new'> */}
          <Link to='/favorites/add'>
            <button className='button'>Add New</button>
          </Link>
        </div>
      </section>
      <section className='section'>
        <div>
          <ul>{map(li, movies)}</ul>
        </div>
      </section>
    </div>
  );
};

const li = movie => {
  return (
    <Link to={`/favorites/${movie.id}`}>
      <li key={movie.id} className='column is-one-quarter'>
        <div className='card'>
          <div className='card-header'>
            <h2 className='card-header-title'>{movie.title}</h2>
          </div>
          <div className='fill' />
        </div>
      </li>
    </Link>
  );
};

export default Favorites;
