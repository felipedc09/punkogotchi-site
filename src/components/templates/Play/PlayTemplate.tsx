import { ReactElement } from 'react';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import ReactGodot from '@/components/organisms/Godot';

const PlayTemplate = (): ReactElement => (
  <MainTemplate page="Play">
    <ReactGodot execname="/static/webGL/nft" resize={false} width={50} height={50} />
  </MainTemplate>
);

export default PlayTemplate;
