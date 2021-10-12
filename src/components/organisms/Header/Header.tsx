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
      <meta property="og:image" content="https://newfestival.town/static/images/home/homeBackground2.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/logoHome.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/about/about-house-1.png.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/about/about-in-game-01.png" />
      <meta property="og:image" content="https://newfestival.town/static/images/about/about-in-game-02.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="/static/fonts/aweMonoV1/AweMono.ttf" as="font" crossOrigin="" />
      <script id="mcjs" dangerouslySetInnerHTML={{__html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/82e0f635a15226663dbd47b6d/870e6e09329d124a2e84e429a.js");`}}/>
    </Head>
  );
};

export default Header;
