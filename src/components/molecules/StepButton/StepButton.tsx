import React, {
  Dispatch, FC, ReactElement, SetStateAction,
} from 'react';
import { Button } from '@/components/atoms/IconButton/iconButton.styles';
import { StepImage } from './stepButton.styles';

export type Step = {
  name: string;
  status: 'done' | 'progress' | 'to do';
  title: string
  description: string
  image: string;
};

type Props = {
  step: Step;
  position: number;
  onClick: Dispatch<SetStateAction<string>>;
};

const StepButton: FC<Props> = (props): ReactElement => {
  const { step, position, onClick } = props;

  function selectLight(): string {
    switch (step.status) {
      case 'done':
        return 'lightGreen';
      case 'progress':
        return 'lightYellow';
      case 'to do':
        return 'lightOff';
      default:
        return 'lightYellow';
    }
  }

  return (
    <Button
      onClick={() => {
        onClick(step.image);
      }}
      type="button"
    >
      <StepImage src={`/static/images/roadmap/${selectLight()}.png`} alt="light" top={position.toString()} />
    </Button>
  );
};

export default StepButton;
