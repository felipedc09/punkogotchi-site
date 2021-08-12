import React, { FC, ReactElement } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  iconPath: string;
};
const MenuButton: FC<Props> = (props): ReactElement => {
  const { name, iconPath } = props;
  return (
    <button type="button">
      {name}
      <Image src={iconPath} alt="main town" height={50} width={50} />
    </button>
  );
};

export default MenuButton;
