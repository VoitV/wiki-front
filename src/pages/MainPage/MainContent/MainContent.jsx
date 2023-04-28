import React from 'react';
import { LayaoutTop } from './LayaoutTop/LayaoutTop';
import { Content } from './Content/Content';
import './styles.scss';

export const MainContent = () => (
  <div className="main-page-layaout">
    <LayaoutTop />
    <Content />
  </div>
);
