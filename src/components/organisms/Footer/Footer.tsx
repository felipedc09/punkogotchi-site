import { FC, ReactElement } from 'react';
import { CopyRight } from './footer.styles';

const Footer: FC = (): ReactElement => (
  <CopyRight>
    <h2>
      ©
      {' '}
      {new Date().getFullYear()}
      , New Festival Town
    </h2>
  </CopyRight>
);

export default Footer;
