import React from 'react';
import { ContentsNav } from './ContentsNav';
import { Introduction } from './Introduction';
import { BasicInformation } from './BasicInformation';
import { MakeBetter } from './MakeBetter/MakeBetter';
import { Contribution } from './Contribution';
import { TechnicalFeatures } from './TechnicalFeatures';
import { Feedback } from './Feedback/Feedback';
import { AnotherLanguage } from './AnotherLanguage';
import { LinksFooter } from './LinksFooter';
import './styles.scss';
import './adaptive.scss';

export const About = () => (
  <div className="about">
    <div className="about-header">
      <span>Вікіпедія: Про</span>
    </div>
    <div className="about-header-bottom">Матеріал з Вікіпедії — вільної енциклопедії.</div>
    <ContentsNav />
    <Introduction />
    <BasicInformation />
    <MakeBetter />
    <Contribution />
    <TechnicalFeatures />
    <Feedback />
    <AnotherLanguage />
    <LinksFooter />
  </div>
);
