import React, { Component } from 'react';
import AlbumsListContainer from './components/AlbumsListContainer';
import PhotoPageContainer from './components/PhotoPageContainer';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Route exact path='/' component={AlbumsListContainer} />
          <Route exact path='/albums/:id' component={PhotoPageContainer} />
        </main>
      </div>
    );
  }
}

export default App;
