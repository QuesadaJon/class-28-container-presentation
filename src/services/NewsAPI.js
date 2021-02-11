const fetch = require('node-fetch');

export const getArticles = search => {
  return fetch(
    `http://newsapi.org/v2/everything?q=${search}&from=2021-01-11&sortBy=publishedAt&apiKey=ad36275f74b64f579e185304779aa33e`
  )
    .then(res => res.json())
    .then(({ articles }) => 
      articles.map((article) => ({
        author: article.author,
        image: article.urlToImage,
        title: article.title,
        description: article.description,
        url: article.url,
      })));
};
