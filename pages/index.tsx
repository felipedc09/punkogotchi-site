import { FC, ReactElement } from 'react';
import Footer from '../src/components/organisms/Footer/Footer';
import Header from '../src/components/organisms/Header/Header';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const App: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Header />
      <Image src="/static/images/mainTownBack.png" alt="main town" width={1000} height={1000} />
      <Footer />
    </div>
  );
};

export default App;
