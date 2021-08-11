import Head from 'next/head';
import { FC, ReactElement } from 'react';

const Header: FC = (): ReactElement => (
  <Head>
    <title>Punkogotchi</title>
    <meta name="description" content="Cryptogame" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Header;
