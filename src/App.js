import React, { Component } from 'react';
import AlbumsListContainer from './components/AlbumsListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <AlbumsListContainer />
        </main>
      </div>
    );
  }
}

export default App;
