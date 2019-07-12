import React from 'react';
import {Link} from '@reach/router';

const Start = props => {
  return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <h1 className='title'>Favorite Movies App</h1>
        <Link to='/favorites'>
          <button className='button'>Get Started</button>
        </Link>
      </div>
    </section>
  );
};

export default Start;
