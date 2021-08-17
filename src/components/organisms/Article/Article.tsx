import { FC, ReactElement } from 'react';
import { Article } from './article.styles';

type Props = {
  children?: ReactElement[] | string;
};

const ArticleC: FC<Props> = (props): ReactElement => {
  const { children } = props;

  return <Article>{children}</Article>;
};

export default ArticleC;
