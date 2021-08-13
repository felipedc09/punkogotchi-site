import React, { FC, ReactElement } from 'react';
import { NormalButton } from './button.styles';

type Props = {
  text: string;
  color?: string;
  iconPath?: string;
};

const Button: FC<Props> = (props): ReactElement => {
  const { text, color = '#9052BC', iconPath } = props;

  function renderIcon(): ReactElement {
    if (iconPath) {
      return <img src={iconPath} alt={text} />;
    }
    return <></>;
  }

  return (
    <NormalButton color={color}>
      {text}
      {renderIcon()}
    </NormalButton>
  );
};

export default Button;
