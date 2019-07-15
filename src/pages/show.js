import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';

const Show = props => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/favorites/' + props.id)
      .then(response => response.json())
      .then(res => setMovie(res));
  }, []);

  const handleDelete = e => {
    e.preventDefault();
    fetch('http://localhost:3000/favorites/' + props.id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(res => navigate('/favorites'));
  };

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>{movie.title}</h1>
          <div className='field is-grouped'>
            <div className='control'>
              <button className='button' onClick={handleDelete}>
                Delete
              </button>
            </div>
            <div className='control'>
              <Link to='/favorites'>
                <button className='button'>Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div>
          <p>Year Released: [insert movie year here]</p>
        </div>
      </section>
    </div>
  );
};

export default Show;
