import { FC, ReactElement } from 'react';
import { Container, FrontImage, Image } from './background.styles';

type Props = {
  children: ReactElement[] | ReactElement;
};

const Background: FC<Props> = (props): ReactElement => {
  const { children } = props;
  const sunriseColor = '#42BFE8';
  const twilightSkyColor = '#f6d896';
  const duskSkyColor = '#171715';

  function changeSkyColor(): string {
    const dayHour = new Date().getHours();

    if (dayHour > 18 || dayHour < 5) {
      return duskSkyColor;
    }
    if (dayHour > 5 && dayHour < 12) {
      return sunriseColor;
    }
    return twilightSkyColor;
  }

  return (
    <Container skyColor={changeSkyColor()}>
      <Image src="/static/images/mainClouds.png" alt="Clouds" />
      <Image src="/static/images/mainMountainsBack.png" alt="Back mountains" />
      <Image src="/static/images/mainMountainsMiddle.png" alt="Middle mountains" />
      <Image src="/static/images/mainMountainsFront.png" alt="Front mountains" />
      <Image src="/static/images/mainTownBack.png" alt="Back town" />
      <Image src="/static/images/mainTownMiddle.png" alt="Middle town" />
      <FrontImage />
      {/* <Image position="0" height="100%" src="/static/images/frontBackground.svg" alt="Clouds" /> */}
      {children}
    </Container>
  );
};

export default Background;
