import { FC, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MenuButton from '@/components/molecules/MenuButton/MenuButton';
import { Bar } from './menuBar.styles';

const MenuBar: FC = (): ReactElement => {
  const views = [{ name: 'About' }, { name: 'Roadmap' }, { name: 'Play' }, { name: 'Tickets' }, { name: 'Whitepaper' }];

  function assignSize(viewName: string): Size {
    switch (viewName.toLowerCase()) {
      case 'play':
      case 'roadmap':
        return 'middle';
      default:
        return 'normal';
    }
  }

  function createButtons(): ReactElement[] {
    return views.map((view) => <MenuButton key={uuidv4()} view={view} size={assignSize(view.name)} />);
  }

  return <Bar viewsCount={views.length}>{createButtons()}</Bar>;
};

export default MenuBar;
