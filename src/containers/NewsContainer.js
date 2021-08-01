import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import NewsDetail from '../components/NewsDetail';
import NewsSelector from '../components/NewsSelect';
import FavouriteArticles from '../components/FavouriteNews';
import './NewsContainer.css';
import ListItem from '../components/ListItem';

const NewsContainer = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [selectedNewsWebUrl, setSelectedNewsWebUrl] = useState('')

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

    const handleArticleSelected = webUrl => {
        setSelectedNewsWebUrl(webUrl)
    }

    const handleFavouriteToggle = (webUrl) => {
        const updatedArticles = news.map((news) => {
            if(news.webUrl === webUrl){
                news.favourite = !news.favourite
            }
            return news
        })
        setNews(updatedArticles)
    }

    const selectedArticle = news.find(news => news.webUrl === selectedNewsWebUrl)

    return (
        <div className="main-news-container">
            <NewsSelector news={news} onNewsSelected={onNewsSelected} handleArticleSelected={handleArticleSelected} />
            {selectedNews ? <NewsDetail onFavouriteToggle={handleFavouriteToggle} Article={selectedArticle} selectedNews={selectedNews} /> : null}
            <FavouriteArticles news={news} onNewsSelected={onNewsSelected} handleArticleSelected={handleArticleSelected} />
            <ListItem />


        </div>
    )
}

export default NewsContainer;