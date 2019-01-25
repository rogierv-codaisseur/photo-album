import React from 'react';

const AlbumsList = props => {
  return (
    <div>
      <h1>All Albums</h1>
      There are {props.albums.length} albums available.
    </div>
  );
};

export default AlbumsList;
