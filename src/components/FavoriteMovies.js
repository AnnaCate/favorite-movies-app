import React from 'react';
import {Link} from '@reach/router';

const FavoriteMovies = ({movies = []}) => {
  return (
    <ul className='columns is-multiline is-centered'>
      {movies.map(movie => (
        <Link
          to={`/favorites/${movie.id}`}
          key={movie.id}
          className='column is-one-quarter'>
          <li>
            <div className='card'>
              <div className='card-header'>
                <h2 className='card-header-title'>{movie.title}</h2>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default FavoriteMovies;
