import React, { FC, ReactElement } from 'react';
import IconButton from '@/components/atoms/IconButton/IconButton';

type Props = {
  view: { name: string };
  size: Size;
};
const MenuButton: FC<Props> = (props): ReactElement => {
  const { view, size } = props;

  function assignScale(): number {
    switch (size) {
      case 'large':
        return 2;
      case 'middle':
        return 1.2;
      case 'small':
        return 0.5;
      default:
        return 1;
    }
  }
  return (
    <IconButton
      text={view.name}
      iconPath={`/static/icons/menuBar/${view.name.toLowerCase()}.svg`}
      scale={assignScale()}
    />
  );
};

export default MenuButton;
