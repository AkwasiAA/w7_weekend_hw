import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import NewsDetail from '../components/NewsDetail';
import NewsSelector from '../components/NewsSelect';
import './NewsContainer.css';

const NewsContainer = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        getNews();

    }, [])

    const getNews = function(){
        fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
        .then(res => res.json())
        .then(news => setNews(news.response.results))
    }

    const onNewsSelected = function(news){
        setSelectedNews(news);
    }

    return (
        <div className="main-news-container">
            <NewsSelector news={news} onNewsSelected={onNewsSelected}  />
            {selectedNews ? <NewsDetail selectedNews={selectedNews} /> : null}

        </div>
    )
}

export default NewsContainer;