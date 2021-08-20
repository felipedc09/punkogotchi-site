import { FC, ReactElement } from 'react';
import { Image, Container, Animation, Content } from './background.styles';

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

  return (
    <Container skyColor={changeSkyColor()}>
      <Animation>
        <Image src="/static/images/mainClouds.png" alt="Clouds" />
        <Image src="/static/images/mainClouds.png" alt="Clouds" />
      </Animation>
      <Animation speed={40}>
        <Image src="/static/images/mainMountainsBack.png" alt="Back mountains" />
        <Image src="/static/images/mainMountainsBack.png" alt="Back mountains" />
      </Animation>
      <Animation speed={35}>
        <Image src="/static/images/mainMountainsMiddle.png" alt="Middle mountains" />
        <Image src="/static/images/mainMountainsMiddle.png" alt="Middle mountains" />
      </Animation>
      <Animation speed={30}>
        <Image src="/static/images/mainMountainsFront.png" alt="Front mountains" />
        <Image src="/static/images/mainMountainsFront.png" alt="Front mountains" />
      </Animation>
      <Animation speed={25}>
        <Image src="/static/images/mainTownBack.png" alt="Back town" />
        <Image src="/static/images/mainTownBack.png" alt="Back town" />
      </Animation>
      <Animation speed={20}>
        <Image src="/static/images/mainTownMiddle.png" alt="Middle town" />
        <Image src="/static/images/mainTownMiddle.png" alt="Middle town" />
      </Animation>
      <Content>
        <Image src="/static/images/frontBackground.png" alt="Front" />
      </Content>
      {children}
    </Container>
  );
};

export default Background;
