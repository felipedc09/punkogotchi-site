import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './iconButton.styles';

type Props = {
  text: string;
  iconPath: string;
  size?: number;
  scale?: number;
};

const IconButton: FC<Props> = (props): ReactElement => {
  const { text, iconPath, size = 70, scale = 1 } = props;
  const imageSize = size * scale;

  return (
    <Link
      href={{
        pathname: `/${text.toLowerCase()}`,
      }}
    >
      <Button>
        {text}
        <Image src={iconPath} alt={text} height={imageSize} width={imageSize} />
      </Button>
    </Link>
  );
};

export default IconButton;
