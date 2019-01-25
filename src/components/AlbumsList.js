import React from 'react';
import './AlbumsList.css';
import { Link } from 'react-router-dom';

const AlbumsList = props => {
  return (
    <div className='albums-list'>
      <h1>All Albums</h1>
      There are {props.albums.length} albums available.
      <ul>
        {props.albums.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
