import { FC, ReactElement } from 'react';
import MainTemplate from '@/components/templates/Main/MainTemplate';

const Home: FC = (): ReactElement => <MainTemplate withHomeLink={false} page="Home" />;

export default Home;
