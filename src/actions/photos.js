import request from 'superagent';

export const SET_PHOTOS = 'SET_PHOTOS';

const setPhotos = photos => {
  return {
    type: SET_PHOTOS,
    payload: photos
  };
};

const getPhotosByAlbum = AlbumId => {
  return dispatch => {
    request(`https://jsonplaceholder.typicode.com/photos/?albumId=${AlbumId}`)
      .then(response => {
        return response.body.map(album => album.url);
      })
      .then(albumPhotos => dispatch(setPhotos(albumPhotos)));
  };
};

export { setPhotos, getPhotosByAlbum };
