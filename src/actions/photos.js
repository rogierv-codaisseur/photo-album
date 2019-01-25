import request from 'superagent';

export const SET_PHOTOS = 'SET_PHOTOS';

export function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    payload: photos
  };
}

export function getPhotosByAlbum(AlbumId) {
  return function(dispatch) {
    request(`https://jsonplaceholder.typicode.com/photos/?albumId=${AlbumId}`)
      .then(response => {
        return response.body.map(album => album.url);
      })
      .then(albumPhotos => dispatch(setPhotos(albumPhotos)));
  };
}

// dispatch(setPhotos(response.body));
