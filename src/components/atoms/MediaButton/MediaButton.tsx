import { FC, ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  imagePath: string;
  href: string;
};

const MediaButton: FC<Props> = (props): ReactElement => {
  const { name, imagePath, href } = props;

  return (
    <Link passHref href={href}>
      <a href={href}>
        <img src={imagePath} alt={name} />
      </a>
    </Link>
  );
};

export default MediaButton;
