import React, { useEffect, useState } from 'react';
import { ContentItem } from '../../../../components/ContentItem/ContentItem';
import { fetchRandomArticles } from '../../../../api';
import './styles.scss';

export const Content = () => {
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    const handleFetchArticles = async () => {
      const artiles = await fetchRandomArticles(5);
      setLoadedItems(artiles);
    };
    handleFetchArticles();
  }, []);

  return (
    <div className="main-content">
      <div className="main-content-container">
        <div className="aricles-content">
          {loadedItems.map((el) => (
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
    </div>
  );
};
