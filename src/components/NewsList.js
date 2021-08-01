import React from 'react';
import ListItem from './ListItem';

const Newslist = ({news, onNewsClick}) => {

    const newsItems = news.map((news, index) => {
        return <ListItem news={news} key={index} onNewsClick={onNewsClick} />

    })

  return (
      <div>
          <ul>
              {newsItems}
          </ul>
      </div>
  )
}

export default Newslist;
