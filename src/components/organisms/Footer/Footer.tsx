import { FC, ReactElement } from 'react';
import { CopyRight } from './footer.styles';

const Footer: FC = (): ReactElement => (
  <CopyRight>
    ©
    {' '}
    {new Date().getFullYear()}
    , New Festival Town
  </CopyRight>
);

export default Footer;
