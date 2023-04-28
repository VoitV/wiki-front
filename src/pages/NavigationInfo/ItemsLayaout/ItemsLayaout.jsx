import React from 'react';
import { Redirection } from './Redirection';
import { Introduction } from './Introduction';
import { NamesTypes } from './NamesTypes';
import { PageSearch } from './PageSearch/PageSearch';
import { UsefulLinks } from './UsefulLinks/UsefulLinks';
import { Result } from './Result/Result';
import './styles.scss';

export const ItemsLayaout = ({ layaoutType }) => {
  if (layaoutType === 'inctroduction') {
    return <Introduction />;
  }
  if (layaoutType === 'names-types') {
    return <NamesTypes />;
  }
  if (layaoutType === 'pages-search') {
    return <PageSearch />;
  }
  if (layaoutType === 'redirection') {
    return <Redirection />;
  }
  if (layaoutType === 'useful-links') {
    return <UsefulLinks />;
  }
  if (layaoutType === 'result') {
    return <Result />;
  }
  return <Introduction />;
};
