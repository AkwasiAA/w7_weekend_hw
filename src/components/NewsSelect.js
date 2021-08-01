import React from 'react';

const NewsSelector = ({news, onNewsSelected}) => {

    const handleChange = function(event) {
        const chosenNews = news[event.target.value];
        onNewsSelected(chosenNews);
    }

    const newsOptions = news.map((news, index) => {
        return <option value={index} key={index}>{news.webTitle}</option>
      })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a News Article</option>
            {newsOptions}
            {news.map(news => {
                return (
                    <option key={news.webUrl} value={news.webUrl}>{news.webTitle}</option>
                )
            })}
        </select>
    )
}

export default NewsSelector;
