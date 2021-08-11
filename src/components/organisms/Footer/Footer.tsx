import { FC, ReactElement } from 'react';

const Footer: FC = (): ReactElement => (
  <footer>
    ©
    {' '}
    {new Date().getFullYear()}
    , New Festival Town
  </footer>
);

export default Footer;
