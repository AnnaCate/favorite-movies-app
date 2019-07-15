import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import FavoriteMovies from '../components/FavoriteMovies';

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
          <Link to='/favorites/add'>
            <button className='button'>Add New</button>
          </Link>
        </div>
      </section>
      <section className='section'>
        <div>
          <FavoriteMovies movies={movies} />
        </div>
      </section>
    </div>
  );
};

export default Favorites;
