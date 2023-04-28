import React from 'react';
import { FlippingAbout } from './components/FlippingAbout';
import { MakeBetterNavigation } from './components/MakeBetterNavigation';
import './styles.scss';

export const MakeBetter = () => (
  <div className="make-better">
    <FlippingAbout />
    <MakeBetterNavigation />
  </div>
);
