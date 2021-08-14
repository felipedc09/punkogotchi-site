import { FC, ReactElement } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { Background, ImageBackground } from './window.styles';

type Props = {
  imagePath: string;
};

const Window: FC<Props> = (props): ReactElement => {
  const { imagePath, children } = props;
  return (
    <Background>
      <ImageBackground imagePath={imagePath} />
      <MenuBar />
      {children}
    </Background>
  );
};

export default Window;
