import {SEARCH_TERM} from './actionTypes'
import Spotify from 'spotify-web-api-js';

const spotifyApi = new Spotify();

export const searchMiddleware = store => next => action => {
  if (action.type === SEARCH_TERM) {
    
    //debugger;
    spotifyApi.setAccessToken(store.getState().token);
    spotifyApi.search('Jewel', ['album'], ).then( (result) => {
      //console.log(result);
      action.albums = result.albums.items.map( (album) => {
        return {
          title: album.name
        };
      })
      //debugger;
      next(action)
    })
    //setTimeout(() => ,5000);  
  } else  next(action);
}