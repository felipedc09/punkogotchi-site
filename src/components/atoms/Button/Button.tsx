import React, { FC, ReactElement } from 'react';
import { NormalButton } from './button.styles';

type Props = {
  text: string;
  color?: string;
  iconPath?: string;
};

const Button: FC<Props> = (props): ReactElement => {
  const { text, iconPath } = props;

  function renderIcon(): ReactElement {
    if (iconPath) {
      return <img src={iconPath} alt={text} />;
    }
    return <></>;
  }

  return (
    <NormalButton>
      {text}
      {renderIcon()}
    </NormalButton>
  );
};

export default Button;
