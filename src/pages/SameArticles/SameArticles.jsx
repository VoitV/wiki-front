import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Headlines } from '../../components/Headlines';
import { fetchSameArticles } from '../../api';
import { Loading } from '../../components/Loading';
import { ContentItem } from '../../components/ContentItem/ContentItem';
import './styles.scss';

export const SameArticles = () => {
  const [sameArticles, setSameArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articleType } = useParams();

  useEffect(() => {
    const handleFetchSameArticles = async () => {
      const fetchedSameArticles = await fetchSameArticles(articleType);
      setSameArticles(fetchedSameArticles);
      setIsLoading(!isLoading);
    };
    handleFetchSameArticles();
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!sameArticles) {
    return (
      <div>
        <h3>Article not found</h3>
      </div>
    );
  }
  return (
    <div className="same-articles">
      <Headlines text="Вітаємо у схожих." />
      <div className="same-articles-container">
        {sameArticles.map((el) => (
          <ContentItem
            key={el.id}
            id={el.id}
            articletitle={el.articletitle}
            articlecontent={el.articlecontent}
            articletype={el.articletype}
          />
        ))}
      </div>
    </div>
  );
};
