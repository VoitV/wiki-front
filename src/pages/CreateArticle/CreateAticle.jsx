import React, { useCallback, useState } from 'react';
import { Headlines } from '../../components/Headlines';
import { StagesList } from './components/StagesList';
import { StagesRender } from './components/StagesRender';
import { FooteredText } from '../../components/FooteredText';
import './styles.scss';

export const CreateArticle = () => {
  const [stageStep, updateStep] = useState(1);

  const handleUpdateStageStep = useCallback((newStageStep) => {
    updateStep(newStageStep);
  });

  return (
    <div className="create-article">
      <div className="create-article-container">
        <div className="container-header">
          <Headlines text="Вікіпедія:Майстер створення статей" />
          <div className="container-header-down-text">
            <span>Матеріал з Вікіпедії — вільної енциклопедії.</span>
          </div>
        </div>
      </div>
      <div className="container-layaout">
        <StagesList stageStep={stageStep} updateStep={handleUpdateStageStep} />
        <div className="layaout-content">
          <StagesRender stageStep={stageStep} updateStep={handleUpdateStageStep} />
        </div>
      </div>
      <FooteredText text="Категорія: Вікіпедія:Майстер створення статей" />
    </div>
  );
};
