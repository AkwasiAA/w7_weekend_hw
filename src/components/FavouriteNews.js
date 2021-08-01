const FavouriteNews = ({news, onNewsSelected}) => {
    const favouriteNews = news.filter(news => news.favourite)

    return (
        <>
      <h3>Favourite Articles:</h3>
      <ul>
        {favouriteNews.map(news => {
          return (
            <li key={news.webUrl}>
              <button onClick={() => onNewsSelected(news.webUrl)}>{news.webTitle}</button>
            </li>
          )
        })}
      </ul>
    </>
    )
}

export default FavouriteNews;