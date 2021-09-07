import { FC, ReactElement } from 'react';
import { Image, Container, BackgroundContent, ParallaxContent, Foreground } from './background.styles';

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
      {renderParallaxImage('Clouds', '/static/images/mainClouds4.png', 600)}
      {renderParallaxImage('Clouds', '/static/images/mainClouds3.png', 550)}
      {renderParallaxImage('Clouds', '/static/images/mainClouds2.png', 200)}
      {renderParallaxImage('Clouds', '/static/images/mainClouds1.png', 100)}
      {renderParallaxImage('Back mountains', '/static/images/mainMountainsBack.png', 300)}
      {renderParallaxImage('Middle mountains', '/static/images/mainMountainsMiddle.png', 260)}
      {renderParallaxImage('Front mountains', '/static/images/mainMountainsFront.png', 200)}
      {renderParallaxImage('Back town', '/static/images/mainTownBack.png', 160)}
      {renderParallaxImage('Back mountains', '/static/images/mainTownMiddle.png', 100)}
      {children}
      <Foreground side="left" src="/static/images/mainFgLeft.png" alt="Foreground left" />
      <Foreground side="right" src="/static/images/mainFgRight.png" alt="Foreground right" />
      <Foreground side="top-left" src="/static/images/mainFgTop_left.png" alt="Foreground top left" />
      <Foreground side="top-right" src="/static/images/mainFgTop_right.png" alt="Foreground top right" />
      <Foreground side="bottom" src="/static/images/mainFgBottom.png" alt="Foreground top right" />
    </Container>
  );
};

export default Background;
