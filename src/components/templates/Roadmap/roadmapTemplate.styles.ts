import styled from 'styled-components';
import { Step } from '@/components/molecules/StepButton/StepButton';

type StepItemProps = {
    step: Step
}

type CheckboxProps = {
    step: Step
    checked: boolean
}

export const Screen = styled.div`
    position: absolute;
    top: 110px;
    right: 97px;
    width: 560px;
    height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Crystal = styled.img`
    position: absolute;
    top: 100px;
    right: 90px;
`;

export const StepList = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100px;
    left: 30px;
    width: 290px;
    height: 530px;
    overflow: auto;
    padding: 5px;
`;

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

export const StepItem = styled.div<StepItemProps>`
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items:center;
    color: ${(props) => getColorByStepStatus(props.step)};
`;

export const Border = styled.div`
    width: 90%;
    margin : 0 auto;
    border-bottom: 2px solid #fff;
`;

// export const CheckboxContainer = styled.label`
//     input{
//         opacity: 0;
//         cursor: pointer;
//         height: 0;
//         width: 0;
//     }

//     :hover input ~ .Checkbox {
//         background-color: #ccf;
//     }

//     input:checked ~ .Checkbox {
//         background-color: #2196F3;
//     }

//     input:checked ~ .Checkbox:after {
//         display: block;
//     }
// `;

// export const Checkbox = styled.span<StepItemProps>`
//     position: absolute;
//     justify-self: center;
//     align-self: center;
//     height: 25px;
//     width: 25px;
//     border-radius: 3px;
//     border: 3px solid ${(props) => getColorByStepStatus(props.step)};
//     background-color:${(props) => props.theme.colors.background};
// `;

export const CheckboxContainer = styled.div`
    display: flex;    
    justify-content: center;
    align-content: center;
`;

export const Icon = styled.svg`
  fill: none;
  stroke-width: 2px;
  `;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  `;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${(props) => props.theme.colors.background};
  border: 3px solid ${(props) => getColorByStepStatus(props.step)};
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    stroke :${(props) => getColorByStepStatus(props.step)};
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`;
