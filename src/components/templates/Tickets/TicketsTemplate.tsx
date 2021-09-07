import { FC, ReactElement } from 'react';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import { Screen, Arm, LoadCharacter, LoadAnimation, LoadMask } from './tickets.styles';

const TicketsTemplate: FC = (): ReactElement => (
  <MainTemplate page="Tickets">
    <Screen src="/static/images/tickets/ticketsInterface.png" alt="Screen" />
    <Arm src="/static/images/tickets/ticketsAssemblerArm.png" alt="Screen" />
    <LoadCharacter>
      <LoadAnimation />
      <LoadMask src="/static/images/tickets/ticketsProgressOverlay.png" alt="Screen" />
    </LoadCharacter>
  </MainTemplate>
);

export default TicketsTemplate;
