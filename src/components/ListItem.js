import React from 'react';
import './ListItem.css';

const ListItem = ({news, onNewsClick}) => {

    const handleClick = function(){
        onNewsClick(news);
    }


    return <li onClick={handleClick}>{news.webTitle}</li>
}

export default ListItem;