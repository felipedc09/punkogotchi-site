import { FC, ReactElement } from 'react';
import { Section } from './article.styles';

type Props = {
  children?: ReactElement[] | string;
};

const ArticleC: FC<Props> = (props): ReactElement => {
  const { children } = props;

  return <Section>{children}</Section>;
};

export default ArticleC;
