import { FC, ReactElement } from 'react';
import Footer from '@/organisms/Footer/Footer';
import Header from '@/organisms/Header/Header';
import Window from '@/components/organisms/Window/Window';
import Background from '@/components/organisms/Background/Background';
import MediaBar from '@/components/organisms/MediaBar/MediaBar';
import Subscribe from '@/components/organisms/Subscribe/Subscribe';
import { Container } from './mainTemplate.styles';

type Props = {
  page: string;
};

const MainTemplate: FC<Props> = (props): ReactElement => {
  const { page, children } = props;
  return (
    <Background>
      <Container>
        <Header title={page} />
        <Window imagePath={`/static/images/${page.toLowerCase()}/${page.toLowerCase()}Background.png`}>
          {children}
          <MediaBar />
          <Subscribe />
        </Window>
        <Footer />
      </Container>
    </Background>
  );
};

export default MainTemplate;
