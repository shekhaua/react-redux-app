const data = [
  {title: 'Test1', duration: '2.51'},
  {title: 'Test2', duration: '2.52'},
  {title: 'Test3', duration: '2.53'},
  {title: 'Test4', duration: '2.54'},
  {title: 'Test5', duration: '2.55'},
  {title: 'Test6', duration: '1.59'}
];

export const songsReducer = () => {
  return data;
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};