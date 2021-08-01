import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import NewsDetail from '../components/NewsDetail';
import NewsSelector from '../components/NewsSelect';
import FavouriteArticles from '../components/FavouriteNews';
import ListItem from '../components/ListItem';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import './NewsContainer.css';


const NewsContainer = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [selectedNewsWebUrl, setSelectedNewsWebUrl] = useState('')
    const [comments, setComments] = useState(
        [
          {
            id: 1,
            author: "Joe Bloggs",
            text: "No idea why we voted to leave, the shelves are empty!"
          },
          {
            id: 2,
            author: "Tommie Robinson",
            text: "Brexit all the way. This is all propaganda!"
          },
          {
            id: 2,
            author: "Matt Hancock",
            text: "I'm sorry what's going on? I've been busy"
          },
          {
            id: 2,
            author: "Nicola Sturgeon",
            text: "We should've left too!"
          }
        ]
      )


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

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now();
        const updatedComments = [...comments, submittedComment];
        setComments(updatedComments)
    }

    const selectedArticle = news.find(news => news.webUrl === selectedNewsWebUrl)

    

    return (
        <div className="main-news-container">
            <NewsSelector news={news} onNewsSelected={onNewsSelected} handleArticleSelected={handleArticleSelected} />
            {selectedNews ? <NewsDetail onFavouriteToggle={handleFavouriteToggle} Article={selectedArticle} selectedNews={selectedNews} /> : null}
            <FavouriteArticles news={news} onNewsSelected={onNewsSelected} handleArticleSelected={handleArticleSelected} />
            <ListItem />
        <div>
            <h3>Comments</h3>
            <CommentList comments={comments} />
            <h4>Add a comment:</h4>
            <CommentForm onCommentSubmit={(comment) => addComment(comment)} />
        </div>
        </div>
    )
};

export default NewsContainer;