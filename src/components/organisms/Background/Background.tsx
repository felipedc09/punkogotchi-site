import { FC, ReactElement } from 'react';
import {
  Image,
  Container,
  Animation,
  Content,
  Slide,
  Three,
  Four,
  ContainerParallax,
  Wrapper,
  OuterWrapper,
  BackgroundContent,
  ParallaxContent,
  ParallaxContent1,
  ParallaxContent2,
} from './background.styles';

type Props = {
  children: ReactElement[] | ReactElement;
};

const Background: FC<Props> = (props): ReactElement => {
  const { children } = props;
  const sunriseColor = '#42BFE8';
  const twilightSkyColor = '#f6d896';
  const duskSkyColor = '#595955';

  function changeSkyColor(): string {
    const dayHour = new Date().getHours();

    if (dayHour > 17 || dayHour < 5) {
      return duskSkyColor;
    }
    if (dayHour > 5 && dayHour < 12) {
      return sunriseColor;
    }
    return twilightSkyColor;
  }

  function renderParallaxImage(name: string, imagePath: string, speed: number): ReactElement {
    return (
      <BackgroundContent>
        <ParallaxContent speed={speed}>
          <Image src={imagePath} alt={name} />
        </ParallaxContent>
        <ParallaxContent speed={speed}>
          <Image src={imagePath} alt={name} />
        </ParallaxContent>
      </BackgroundContent>
    );
  }

  return (
    <Container skyColor={changeSkyColor()}>
      {renderParallaxImage('Clouds', '/static/images/mainClouds.png', 60)}
      {renderParallaxImage('Back mountains', '/static/images/mainMountainsBack.png', 50)}
      {renderParallaxImage('Middle mountains', '/static/images/mainMountainsMiddle.png', 45)}
      {renderParallaxImage('Front mountains', '/static/images/mainMountainsFront.png', 40)}
      {renderParallaxImage('Back town', '/static/images/mainTownBack.png', 35)}
      {renderParallaxImage('Back mountains', '/static/images/mainTownMiddle.png', 30)}
      {children}
    </Container>
  );
};

export default Background;
