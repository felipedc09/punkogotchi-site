import styled from 'styled-components';

type ContainerProps={
  skyColor: string
}

type ImageProps={
  position?: string
}

type AnimationProps={
  speed?: number
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, ${(props) => props.skyColor} 50%, rgba(156,139,219,1) 50%);
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display:none;
  }
`;

export const BackgroundContent = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200%;
  height: 100%;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display:none;
  }
  `;

export const ParallaxContent = styled.div<AnimationProps>`
  margin-left: -1px;
  animation: background-shift ${({ speed = 50 }) => speed}s linear infinite forwards;
  
  @keyframes background-shift {
    to {
      transform: translateX(-100%);
    }
  }
  `;

export const Image = styled.img<ImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ImageBackground = styled.img<ImageProps>`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url('/static/images/frontBackground.png');
  background-repeat: round;
`;
