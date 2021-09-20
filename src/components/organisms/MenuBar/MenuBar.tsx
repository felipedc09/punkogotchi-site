import { FC, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MenuButton from '@/components/molecules/MenuButton/MenuButton';
import AboutSVG from '@/static/icons/menuBar/about';
import PlaySVG from '@/static/icons/menuBar/play';
import RoadmapSVG from '@/static/icons/menuBar/roadmap';
import TicketsSVG from '@/static/icons/menuBar/tickets';
import WhitepaperSVG from '@/static/icons/menuBar/whitepaper';
import { Bar } from './menuBar.styles';

const MenuBar: FC = (): ReactElement => {
  const views = [
    { name: 'About', svgIcon: <AboutSVG /> },
    { name: 'Roadmap', svgIcon: <RoadmapSVG /> },
    { name: 'Play', svgIcon: <PlaySVG /> },
    { name: 'Tickets', svgIcon: <TicketsSVG /> },
    { name: 'Whitepaper', svgIcon: <WhitepaperSVG /> },
  ];

  function assignSize(viewName: string): Size {
    switch (viewName.toLowerCase()) {
      case 'play':
        return 'middle';
      default:
        return 'normal';
    }
  }

  function createButtons(): ReactElement[] {
    return views.map((view) => (
      <MenuButton key={uuidv4()} view={view} size={assignSize(view.name)} svgIcon={view.svgIcon} />
    ));
  }

  return <Bar viewsCount={views.length}>{createButtons()}</Bar>;
};

export default MenuBar;
