import React from 'react';

const PhotoPage = props => {
  return (
    <div>
      <h1>Photos in this album</h1>
      {props.photos.map(photo => (
        <img key={photo} src={photo} alt={photo} />
      ))}
    </div>
  );
};

export default PhotoPage;
