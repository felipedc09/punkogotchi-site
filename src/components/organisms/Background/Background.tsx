import { FC, ReactElement } from 'react';
import { Container } from './background.styles';

type Props = {
  children: ReactElement[] | ReactElement;
};

const Background: FC<Props> = (props): ReactElement => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default Background;
