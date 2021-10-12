import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { NormalButton } from './button.styles';

type Props = {
  text: string;
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
    <Link href='' passHref>
      <NormalButton>
        {text}
        {renderIcon()}
      </NormalButton>
    </Link>
  );
};

export default Button;
