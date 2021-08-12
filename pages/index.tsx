import { FC, ReactElement } from 'react';
import Footer from '@/organisms/Footer/Footer';
import Header from '@/organisms/Header/Header';
import Window from '@/components/organisms/Window/Window';
import styles from '../styles/Home.module.css';

const App: FC = (): ReactElement => (
  <div className={styles.container}>
    <Header />
    <Window imagePath="/static/images/homeBackground.png">hola</Window>
    <Footer />
  </div>
);

export default App;
