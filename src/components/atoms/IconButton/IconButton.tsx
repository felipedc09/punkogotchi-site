import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Icon } from './iconButton.styles';

type Props = {
  text: string;
  svgIcon: ReactElement;
  size?: number;
  scale?: number;
  disabled?: boolean;
};

const IconButton: FC<Props> = (props): ReactElement => {
  const router = useRouter();
  const { text, svgIcon, size = 70, scale = 1, disabled } = props;
  console.log(text, disabled);
  const imageSize = size * scale;

  return (
    <Link
      passHref
      href={{
        pathname: disabled?'/':`/${text.toLowerCase()}`,
      }}
    >
      <Button disabled={disabled} isSelected={router.pathname === `/${text.toLowerCase()}`}>
        {text}
        <Icon height={imageSize} width={imageSize}>
          {svgIcon}
        </Icon>
      </Button>
    </Link>
  );
};

export default IconButton;
