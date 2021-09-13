import { FC, ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  imagePath: string;
  href: string;
};

const MediaButton: FC<Props> = (props): ReactElement => {
  const { name, imagePath, href } = props;
  const iconSize = 35;
  return (
    <Link passHref href={href}>
      <a href={href}>
        <img src={imagePath} width={`${iconSize}px`} height={`${iconSize}px`} alt={name} />
      </a>
    </Link>
  );
};

export default MediaButton;
