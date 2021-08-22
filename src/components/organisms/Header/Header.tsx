import Head from 'next/head';
import { FC, ReactElement } from 'react';

type Props = {
  title?: string;
};

const Header: FC<Props> = (props): ReactElement => {
  const { title = 'Punkogotchi' } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Cryptogame" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="/static/fonts/aweMonoV1/AweMono.ttf" as="font" crossOrigin="" />
    </Head>
  );
};

export default Header;
