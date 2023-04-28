import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const ContentItem = ({
  articletitle,
  articlecontent,
  textMore = 'Читати далі',
  articletype,
  id,
}) => {
  const splicedContent = `${articlecontent.split(200)[0]} ...`;
  return (
    <div className="content-item" id={id}>
      <div className="item-title">{articletitle}</div>
      <div className="item-content">{splicedContent}</div>
      <div className="item-footer-nav">
        <div className="footer-container">
          <div className="footer-text-more">
            <NavLink to={`/article/${id}`}>
              <span>{textMore}</span>
            </NavLink>
          </div>
          <NavLink to={`/articles/${articletype}`} className="footer-same">
            <span>Схожі</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
