/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './styles.scss';
import './adaptive.scss';

export const StagesList = ({ stageStep = 1, updateStep }) => {
  const onHadleClick = (e) => {
    updateStep(+e.target.id);
  };
  const steps = [
    {
      stepNumber: 1,
      stepValue: 'Початок',
    },
    {
      stepNumber: 2,
      stepValue: 'Предмет',
    },
    {
      stepNumber: 3,
      stepValue: 'Значущість',
    },
    {
      stepNumber: 4,
      stepValue: 'Джерела',
    },
    {
      stepNumber: 5,
      stepValue: 'Вміст',
    },
    {
      stepNumber: 6,
      stepValue: 'Готово',
    },
  ];

  return (
    <div className="stages-list">
      {steps.map((el) => (
        <div
          key={el.stepNumber}
          id={el.stepNumber}
          className={
            el.stepNumber <= stageStep
              ? 'stage-list-item'
              : 'stage-list-item stage-list-item-disabled'
          }
          onClick={onHadleClick}
        >
          {el.stepNumber}.{el.stepValue}
        </div>
      ))}
    </div>
  );
};
