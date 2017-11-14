import React from 'react';
import Album from './Album';
import {List} from 'material-ui/List';

const AlbumList = ({albums}) => (
  <div>
    <List>
      {albums.map((album,index) => 
        <Album key={index} album={album}/>
      )}
    </List> 
  </div>   
) 


export default AlbumList;