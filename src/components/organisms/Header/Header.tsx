import Head from 'next/head';
import { FC, ReactElement } from 'react';

type Props = {
  title?: string;
};

const Header: FC<Props> = (props): ReactElement => {
  const { title = 'New festival Town' } = props;

  return (
    <Head>
      <title>New Festival Town - {title}</title>
      <meta name="description" content="Turn your crypto-art assets into virtual pets" />
      <meta property="og:image" content="https://newfestival.town/static/images/home/homeBackground.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/logoHome.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/about/about-house-1.png.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/about/about-in-game-01.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/about/about-in-game-02.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="/static/fonts/aweMonoV1/AweMono.ttf" as="font" crossOrigin="" />
    </Head>
  );
};

export default Header;
