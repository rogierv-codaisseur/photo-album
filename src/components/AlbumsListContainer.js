import React from 'react';
import AlbumsList from './AlbumsList';
import { connect } from 'react-redux';
import { addAlbum, getAlbums } from '../actions/albums';

class AlbumsListContainer extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    if (!this.props.albums) {
      return <p>Loading...</p>;
    } else {
      return <AlbumsList albums={this.props.albums} />;
    }
  }
}

const mapStateToProps = state => {
  return { albums: state.albums };
};

export default connect(
  mapStateToProps,
  { addAlbum, getAlbums }
)(AlbumsListContainer);
