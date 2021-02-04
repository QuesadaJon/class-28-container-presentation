const apiKey = 'ad36275f74b64f579e185304779aa33e';
const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

export const getArticles = () => {
  return fetch(
    `${URL}${apiKey}`
  )
    .then(res => res.json())
    .then(json => json.articles);
};
