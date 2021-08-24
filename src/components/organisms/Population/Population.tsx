import { FC, ReactElement } from 'react';
import { Container } from './population.styles';

type Props = {
  population: number;
};

const Population: FC<Props> = (props): ReactElement => {
  const { population } = props;

  function formatPopulation(): string {
    if (population > 999 && population < 1000000) {
      return `${population / 1000}K`;
    }
    if (population > 1000000) {
      return `${population / 1000000}M`;
    }
    return population.toString();
  }

  return (
    <Container>
      <span>population</span>
      <span>{formatPopulation()}</span>
    </Container>
  );
};

export default Population;
