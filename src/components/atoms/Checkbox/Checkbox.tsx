import { FC, ReactElement } from 'react';
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from './checkbox.styles';

type Props = {
  checked: boolean;
  color: string;
};

const Checkbox: FC<Props> = ({ checked, color }): ReactElement => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox color={color} defaultChecked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
