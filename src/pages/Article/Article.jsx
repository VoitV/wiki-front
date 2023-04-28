import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { fetchArticleById } from '../../api';
import { Headlines } from '../../components/Headlines';
import { Loading } from '../../components/Loading/Loading';
import './styles.scss';

export const Article = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const handleFetchArticle = async () => {
      const fetchedArticle = await fetchArticleById(id);
      setArticle(fetchedArticle);
      setIsLoading(!isLoading);
    };
    handleFetchArticle();
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!article) {
    return (
      <div>
        <h3>Article not found</h3>
      </div>
    );
  }

  return (
    <div className="article">
      <div className="article-tile">
        <Headlines text={article.articletitle} />
      </div>
      <div className="article-content">{parse(article.articlecontent)}</div>
    </div>
  );
};
