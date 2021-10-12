import { FC, ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  imagePath: string;
  href: string;
  target?: string;
  rel?: string;
};

const MediaButton: FC<Props> = (props): ReactElement => {
  const { name, imagePath, href, target, rel } = props;
  const iconSize = 35;
  return (
    <Link passHref href={href}>
      <a href={href} target={target} rel={rel}>
        <img src={imagePath} width={`${iconSize}px`} height={`${iconSize}px`} alt={name} />
      </a>
    </Link>
  );
};

export default MediaButton;
