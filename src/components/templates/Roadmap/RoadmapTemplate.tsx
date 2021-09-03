import { FC, ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import StepButton, { Step } from '@/components/molecules/StepButton/StepButton';
import { Border, Crystal, Screen, StepItem, StepList } from './roadmapTemplate.styles';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';

const steps: Step[] = [
  {
    name: '1',
    status: 'done',
    title: 'Q1 2021',
    description: 'Define initial game and mechanics.',
    image: 'roadmapStep_1',
  },
  {
    name: '2',
    status: 'done',
    title: 'Q2 2021',
    description: 'Create smart contracts ERC20.',
    image: 'roadmapStep_2',
  },
  {
    name: '3',
    status: 'done',
    title: 'Q3 2021',
    description: 'Launch website and demo.',
    image: 'roadmapStep_3',
  },
  {
    name: '4',
    status: 'progress',
    title: 'Q4 2021',
    description: 'Launch apartment decoration.',
    image: 'roadmapStep_4',
  },
  {
    name: '5',
    status: 'to do',
    title: 'Q1 2022',
    description: 'Launch town exploration.',
    image: 'roadmapStep_5',
  },
  {
    name: '6',
    status: 'to do',
    title: 'Q3 2022',
    description: 'Launch crafting and pets.',
    image: 'roadmapStep_6',
  },
  {
    name: '7',
    status: 'to do',
    title: 'Q1 2023',
    description: 'Launch inter-town traveling.',
    image: 'roadmapStep_7',
  },
];

const RoadmapTemplate: FC = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);

  function getColorByStepStatus(step: Step): string {
    switch (step.status) {
      case 'done':
        return '#8FD032';
      case 'progress':
        return '#F8C53A';
      default:
        return '#FFF';
    }
  }

  function createSteps(): ReactElement[] {
    let position = 205;
    const increment = 42;
    return steps.map((step) => {
      position += increment;
      return <StepButton key={uuidv4()} onClick={setCurrentStep} position={position} step={step} />;
    });
  }

  function createStepItems(): ReactElement[] {
    return steps.map((step) => (
      <span key={uuidv4()}>
        <StepItem
          color={getColorByStepStatus(step)}
          active={currentStep?.name === step.name}
          onClick={() => {
            setCurrentStep(step);
          }}
        >
          <span>
            <strong>{step.title}:</strong> {step.description}
          </span>
          <Checkbox checked={step.status === 'done'} color={getColorByStepStatus(step)} />
        </StepItem>
        <Border />
      </span>
    ));
  }

  return (
    <MainTemplate page="Roadmap">
      <StepList>{createStepItems()}</StepList>
      {createSteps()}
      <Screen>
        <img src={`/static/images/roadmap/${currentStep?.image}.png`} alt="Current step" />
      </Screen>
      <Crystal src="/static/images/roadmap/roadmapCrystal.png" alt="Crystal" />
    </MainTemplate>
  );
};

export default RoadmapTemplate;
