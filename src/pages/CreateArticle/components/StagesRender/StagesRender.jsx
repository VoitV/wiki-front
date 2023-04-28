import React from 'react';
import { FirstStage } from './FirstStage/FirstStage';
import { SecondStage } from './SecondStage';
import { StageThree } from './StageThree';
import { FourthStage } from './FourthStage';
import { FifthStage } from './FifthStage';
import { FinalStage } from './FinalStage/FinalStage';

export const StagesRender = ({ stageStep, updateStep }) => {
  if (stageStep === 1) {
    return <FirstStage stageStep={stageStep} updateStep={updateStep} />;
  }
  if (stageStep === 2) {
    return <SecondStage stageStep={stageStep} updateStep={updateStep} />;
  }
  if (stageStep === 3) {
    return <StageThree stageStep={stageStep} updateStep={updateStep} />;
  }
  if (stageStep === 4) {
    return <FourthStage stageStep={stageStep} updateStep={updateStep} />;
  }
  if (stageStep === 5) {
    return <FifthStage stageStep={stageStep} updateStep={updateStep} />;
  }
  if (stageStep === 6) {
    return <FinalStage />;
  }
  return <FirstStage stageStep={stageStep} updateStep={updateStep} />;
};
