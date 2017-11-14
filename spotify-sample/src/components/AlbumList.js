import React from 'react';
import Album from './Album';

const AlbumList = ({albums}) => (
  <div>
    <ul>
      {albums.map((album,index) => 
        <Album key={index} album={album}/>
      )}
    </ul> 
  </div>   
) 


export default AlbumList;