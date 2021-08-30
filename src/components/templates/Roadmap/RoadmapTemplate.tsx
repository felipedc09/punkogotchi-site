import { FC, ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import StepButton, { Step } from '@/components/molecules/StepButton/StepButton';
import { RoadmapImage, Screen } from './roadmapTemplate.styles';

const RoadmapTemplate: FC = (): ReactElement => {
  const [imageStep, setImageStep] = useState('roadmapStep_1');
  const steps: Step[] = [
    { name: '1', status: 'to do', image: 'roadmapStep_1' },
    { name: '2', status: 'done', image: 'roadmapStep_2' },
    { name: '3', status: 'done', image: 'roadmapStep_3' },
    { name: '4', status: 'progress', image: 'roadmapStep_4' },
    { name: '5', status: 'progress', image: 'roadmapStep_5' },
    { name: '6', status: 'progress', image: 'roadmapStep_6' },
    { name: '7', status: 'progress', image: 'roadmapStep_7' },
  ];

  function createSteps(): ReactElement[] {
    let position = 205;
    const increment = 42;
    return steps.map((step) => {
      position += increment;
      return <StepButton onClick={setImageStep} position={position} key={uuidv4()} step={step} />;
    });
  }

  return (
    <MainTemplate page="Roadmap">
      {createSteps()}
      <Screen>
        <RoadmapImage src={`/static/images/roadmap/${imageStep}.png`} alt="Current step" />
      </Screen>
    </MainTemplate>
  );
};

export default RoadmapTemplate;
