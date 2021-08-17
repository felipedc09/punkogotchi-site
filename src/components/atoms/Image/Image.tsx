import { FC, ReactElement } from 'react';
import Image, { ImageLoaderProps } from 'next/image';

const CustomImage: FC = (): ReactElement => {
  const loader = ({ src, width, quality }: ImageLoaderProps): string => `https://example.com/${src}?w=${width}&q=${quality || 75}`;

  return <Image loader={loader} src="me.png" alt="Picture of the author" width={500} height={500} />;
};

export default CustomImage;
