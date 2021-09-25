import React, { FC, ReactElement } from 'react';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { MenuIcon } from './menuButton.styles';

type Props = {
  view: { name: string };
  size: Size;
  svgIcon: ReactElement;
  disabled?: boolean;
};
const MenuButton: FC<Props> = (props): ReactElement => {
  const { view, size, svgIcon, disabled = false } = props;

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
    <MenuIcon>
      <IconButton text={view.name} svgIcon={svgIcon} scale={assignScale()} disabled={ disabled }/>
    </MenuIcon>
  );
};

export default MenuButton;
