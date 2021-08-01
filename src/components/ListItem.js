import React from 'react';
import './ListItem.css';

const ListItem = ({news, onNewsClick, onFavouriteToggle}) => {

    const handleClick = function(){
        onNewsClick(news);
    }

    const handleFave = () => {
        onFavouriteToggle(news.webUrl)
    }

    // const favouriteBtnText = news.favourite ? 'Remove from favourites' : 'Add to favourites'

    return (
    <>
    {/* <li onClick={handleClick}>{news.webTitle}</li> */}
    {/* <button onClick={handleFave}>{favouriteBtnText}</button> */}
    </>
    )
}

export default ListItem;