import { FC, ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';

const Whitepaper: FC = (): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://ethereum.org/en/whitepaper/');
  }, [router]);

  return <></>;
};

export default Whitepaper;
