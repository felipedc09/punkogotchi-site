import { FC, ReactElement } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { Container, BackgroundImage } from './window.styles';

type Props = {
  imagePath: string;
};

const Window: FC<Props> = (props): ReactElement => {
  const { imagePath, children } = props;
  return (
    <Container>
      <BackgroundImage imagePath={imagePath} />
      <MenuBar />
      {children}
    </Container>
  );
};

export default Window;
