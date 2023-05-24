const START_URL = 'http://localhost:3000/api/v1';

export const fetchRandomArticles = (limit) =>
  fetch(`${START_URL}/articlesRandom?limit=${limit}`)
    .then((res) => res.json())
    .then((data) => data.articles);

export const fetchArticlesPost = (reqBody) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reqBody),
  };
  return fetch(`${START_URL}/articles`, requestOptions)
    .then((res) => res.json())
    .then((data) => console.log(data.article));
};

export const fetchArticleById = (id) =>
  fetch(`${START_URL}/article/${id}`)
    .then((res) => res.json())
    .then((data) => data);

export const fetchSameArticles = (articleType) =>
  fetch(`${START_URL}/articles/same/${articleType}`)
    .then((res) => res.json())
    .then((data) => data);

export const fetchArticlesBySearch = (search) =>
  fetch(`${START_URL}/articles/search?search=${search}`)
    .then((res) => res.json())
    .then((data) => data);
