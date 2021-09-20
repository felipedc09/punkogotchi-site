import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Icon } from './iconButton.styles';

type Props = {
  text: string;
  svgIcon: ReactElement;
  size?: number;
  scale?: number;
};

const IconButton: FC<Props> = (props): ReactElement => {
  const router = useRouter();
  const { text, svgIcon, size = 70, scale = 1 } = props;
  const imageSize = size * scale;

  return (
    <Link
      passHref
      href={{
        pathname: `/${text.toLowerCase()}`,
      }}
    >
      <Button isSelected={router.pathname === `/${text.toLowerCase()}`}>
        {text}
        <Icon height={imageSize} width={imageSize}>
          {svgIcon}
        </Icon>
      </Button>
    </Link>
  );
};

export default IconButton;
