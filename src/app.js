import React from 'react';
import {Router} from '@reach/router';

// import pages
import Start from './pages/start';
import Favorites from './pages/favorites';
import Show from './pages/show';
import Add from './pages/add';
import SearchAndAdd from './pages/SearchAndAdd';

const App = props => {
  return (
    <Router>
      <Start path='/' />
      <Show path='/favorites/:id' />
      {/* <Add path='/favorites/new' /> */}
      <SearchAndAdd path='/favorites/add' />
      <Favorites path='/favorites' />
    </Router>
  );
};

export default App;
