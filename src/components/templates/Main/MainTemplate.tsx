import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Footer from '@/organisms/Footer/Footer';
import Header from '@/organisms/Header/Header';
import Window from '@/components/organisms/Window/Window';
import Background from '@/components/organisms/Background/Background';
import MediaBar from '@/components/organisms/MediaBar/MediaBar';
import Subscribe from '@/components/organisms/Subscribe/Subscribe';
import { Container, ToHomeLink } from './mainTemplate.styles';

type Props = {
  page: string;
  withHomeLink?: boolean;
};

const MainTemplate: FC<Props> = (props): ReactElement => {
  const { page, withHomeLink = true, children } = props;
  return (
    <Container>
      <Background>
        <Header title={page} />
        <Window
          withBackground={withHomeLink}
          imagePath={`/static/images/${page.toLowerCase()}/${page.toLowerCase()}Background.png`}
        >
          {children}
          <MediaBar />
          <Subscribe />
          {withHomeLink && (
            <ToHomeLink>
              <Link passHref href="/home">
                <a href="/home">
                  <img src="/static/images/logoHome.png" alt="Logo home" />
                </a>
              </Link>
            </ToHomeLink>
          )}
        </Window>
      </Background>
      <Footer />
    </Container>
  );
};

export default MainTemplate;
