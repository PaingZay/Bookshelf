import './App.css';
import './styles.css';
import { Navbar } from './Navbar&Footer/Navbar';
import { IndexPage } from './IndexPage/IndexPage';

import Footer from './Navbar&Footer/Footer';
import { LyricPage } from './LyricPage/LyricPage';
import { Bookshelf } from './IndexPage/Components/Bookshelf';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { Carousel } from './IndexPage/Components/Carousel';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Carousel />
      <div className='flex-grow-1'></div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/index' />
          </Route>
          <Route path='/index'>
            <Bookshelf />
          </Route>
          <Route path='/lyrics/:songId'>
            <LyricPage />
          </Route>
        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
