const { VITE_API_BASE_URL } = import.meta.env;
const START_URL = `${VITE_API_BASE_URL}/api/v1`;

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

  return fetch(`${START_URL}/articles`, requestOptions).then((res) => res.json());
};

export const fetchArticleById = (id) =>
  fetch(`${START_URL}/article/${id}`).then((res) => res.json());

export const fetchSameArticles = (articleType) =>
  fetch(`${START_URL}/articles/same/${articleType}`).then((res) => res.json());

export const fetchArticlesBySearch = (search) =>
  fetch(`${START_URL}/articles/search?search=${search}`).then((res) => res.json());
