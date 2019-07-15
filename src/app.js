import React from 'react';
import {Router} from '@reach/router';

// import pages
import Start from './pages/start';
import Favorites from './pages/favorites';
import Show from './pages/show';
import AddMovie from './pages/AddMovie';

const App = () => {
  return (
    <Router>
      <Start path='/' />
      <Show path='/favorites/:id' />
      <AddMovie path='/favorites/add' />
      <Favorites path='/favorites' />
    </Router>
  );
};

export default App;
