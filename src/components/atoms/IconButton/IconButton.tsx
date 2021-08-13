import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { Button } from './iconButton.styles';

type Props = {
  text: string;
  iconPath: string;
  size?: number;
  scale?: number;
};

const IconButton: FC<Props> = (props): ReactElement => {
  const {
    text, iconPath, size = 70, scale = 1,
  } = props;
  const imageSize = size * scale;

  return (
    <Button>
      {text}
      <Image src={iconPath} alt={text} height={imageSize} width={imageSize} />
    </Button>
  );
};

export default IconButton;
