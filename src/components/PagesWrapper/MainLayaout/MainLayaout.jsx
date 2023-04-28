import React from 'react';
import './styles.scss';

// eslint-disable-next-line react/prop-types
export const MainLayout = ({ children }) => (
  <div className="main-layaout">
    <div className="main-layaout-container">{children}</div>
  </div>
);
