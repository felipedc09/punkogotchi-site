import { FC, ReactElement, useState } from 'react';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import Population from '@/components/organisms/Population/Population';

const Home: FC = (): ReactElement => {
  const [population, setPopulation] = useState(16000);
  setPopulation(18000);
  return (
    <MainTemplate withHomeLink={false} page="Home">
      <Population population={population} />
    </MainTemplate>
  );
};

export default Home;
