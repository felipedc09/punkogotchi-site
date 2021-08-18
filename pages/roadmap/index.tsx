import { FC, ReactElement } from 'react';
import MainTemplate from '@/components/templates/Main/MainTemplate';

const Roadmap: FC = (): ReactElement => <MainTemplate withHomeLink={false} page="Roadmap" />;

export default Roadmap;
