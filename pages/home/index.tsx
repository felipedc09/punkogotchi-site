import { FC, ReactElement } from 'react';
import Footer from '@/organisms/Footer/Footer';
import Header from '@/organisms/Header/Header';
import Window from '@/components/organisms/Window/Window';
import Background from '@/components/organisms/Background/Background';
import MediaBar from '@/components/organisms/MediaBar/MediaBar';
import Subscribe from '@/components/organisms/Subscribe/Subscribe';

const Home: FC = (): ReactElement => (
  <Background>
    <Header title="Home" />
    <Window imagePath="/static/images/homeBackground.png">
      <MediaBar />
      <Subscribe />
    </Window>
    <Footer />
  </Background>
);

export default Home;
