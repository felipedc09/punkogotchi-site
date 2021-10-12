import { FC, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MediaButton from '@/components/atoms/MediaButton/MediaButton';
import { Bar } from './mediaBar.styles';

const MediaBar: FC = (): ReactElement => {
  const socialMedia = [
    {
      name: 'Discord',
      href: 'https://discord.gg/epvWhYvEhA',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/newfestivaltown',
    },
    {
      name: 'Substack',
      href: 'https://town.substack.com/p/welcome-to-new-festival-town?showWelcome=true',
    },
  ];

  function createMediaButtons(): ReactElement[] {
    return socialMedia.map((media) => (
      <MediaButton
        key={uuidv4()}
        name={media.name}
        imagePath={`/static/icons/mediaBar/${media.name.toLowerCase()}.svg`}
        href={media.href}
        target='_blank'
        rel='noreferrer'
      />
    ));
  }

  return <Bar mediaCount={socialMedia.length}>{createMediaButtons()}</Bar>;
};

export default MediaBar;
