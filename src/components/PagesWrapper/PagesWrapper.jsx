import React from 'react';
import { LeftNavbar } from '../LeftNavbar';
import { MainLayout } from './MainLayaout';
import { Header } from '../Header';
import './styles.scss';

export const PagesWrappers = ({ children }) => (
  <div className="PageContent">
    <LeftNavbar />
    <div className="content-container">
      <Header />
      <MainLayout>{children}</MainLayout>
    </div>
  </div>
);
