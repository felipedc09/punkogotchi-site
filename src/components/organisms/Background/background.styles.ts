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
  position: absolute;
  width: 100vw;
  height: 100vh;
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
  width: 200vw;
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
  width: 100%;
`;
