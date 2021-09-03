import { FC, ReactElement } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { Container, BackgroundImage, FooterContainer } from './window.styles';

type Props = {
  imagePath: string;
  withBackground?: boolean;
};

const Window: FC<Props> = (props): ReactElement => {
  const { imagePath, children, withBackground } = props;
  return (
    <Container withBackground={withBackground}>
      <BackgroundImage imagePath={imagePath} />
      <MenuBar />
      <FooterContainer />
      {children}
    </Container>
  );
};

export default Window;
