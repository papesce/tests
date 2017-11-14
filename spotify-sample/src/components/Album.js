import React from 'react'
import {ListItem} from 'material-ui/List';

const Album = ({album}) => (<ListItem>
{album.title}
</ListItem>
)


export default Album;