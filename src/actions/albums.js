import request from 'superagent';

export const ADD_ALBUM = 'ADD_ALBUM';
export const SET_ALBUMS = 'SET_ALBUMS';

const addAlbum = (id, title) => {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  };
};

const setAlbums = albums => {
  return {
    type: SET_ALBUMS,
    payload: albums
  };
};

const getAlbums = () => {
  return dispatch => {
    request('https://jsonplaceholder.typicode.com/albums').then(response => {
      dispatch(setAlbums(response.body));
    });
  };
};

const createAlbum = title => {
  return dispatch => {
    request
      .post('https://jsonplaceholder.typicode.com/albums')
      .send({ title })
      .then(response =>
        dispatch(addAlbum(response.body.id, response.body.title))
      );
  };
};

export { addAlbum, setAlbums, getAlbums, createAlbum };
