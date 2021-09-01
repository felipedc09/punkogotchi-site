import { FC, ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import StepButton, { Step } from '@/components/molecules/StepButton/StepButton';
import {
  Border,
  CheckboxContainer,
  Crystal,
  HiddenCheckbox,
  Icon,
  Screen,
  StepItem,
  StepList,
  StyledCheckbox,
} from './roadmapTemplate.styles';

const RoadmapTemplate: FC = (): ReactElement => {
  const [imageStep, setImageStep] = useState('roadmapStep_1');
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
      status: 'progress',
      title: 'Q2 2021',
      description: 'Create smart contracts ERC20.',
      image: 'roadmapStep_2',
    },
    {
      name: '3',
      status: 'to do',
      title: 'Q3 2021',
      description: 'Launch website and demo.',
      image: 'roadmapStep_3',
    },
    {
      name: '4',
      status: 'to do',
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

  function createSteps(): ReactElement[] {
    let position = 205;
    const increment = 42;
    return steps.map((step) => {
      position += increment;
      return <StepButton onClick={setImageStep} position={position} key={uuidv4()} step={step} />;
    });
  }

  function createStepItems(): ReactElement[] {
    return steps.map((step) => (
      <>
        <StepItem key={uuidv4()} step={step}>
          <span>
            <strong>{step.title}:</strong> {step.description}
          </span>
          {/* <CheckboxContainer>
            <input type="checkbox" checked={step.status === 'done'} />
            <Checkbox step={step} />
          </CheckboxContainer> */}
          <div>{Checkbox(step.status === 'done', step)}</div>
        </StepItem>
        <Border />
      </>
    ));
  }

  return (
    <MainTemplate page="Roadmap">
      <StepList>{createStepItems()}</StepList>
      {createSteps()}
      <Screen>
        <img src={`/static/images/roadmap/${imageStep}.png`} alt="Current step" />
      </Screen>
      <Crystal src="/static/images/roadmap/roadmapCrystal.png" alt="Crystal" />
    </MainTemplate>
  );
};

const Checkbox = (checked, step): ReactElement => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox step={step} checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default RoadmapTemplate;
