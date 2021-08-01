import React from 'react';
import NewsContainer from '../containers/NewsContainer';

const NewsDetail = ({selectedNews}) => {
    return (

        <div>
            <h3>{selectedNews.webTitle}</h3>
            <h4>{selectedNews.sectionName}</h4>
            <button><a href={selectedNews.webUrl}><h2>View Full Article</h2></a></button>
            <p>Publication Date: {selectedNews.webPublicationDate}</p>
        </div>
    )
}

export default NewsDetail;