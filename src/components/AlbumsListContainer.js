import React from 'react';
import request from 'superagent';
import AlbumsList from './AlbumsList';

export default class AlbumsListContainer extends React.Component {
  state = {};

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums').then(response =>
      this.setState({ albums: response.body })
    );
  }

  render() {
    if (!this.state.albums) {
      return <p>Loading...</p>;
    } else {
      return <AlbumsList albums={this.state.albums} />;
    }
  }
}
