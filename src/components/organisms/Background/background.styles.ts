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

type ForegroundProps={
  side: string

}

export const Container = styled.div<ContainerProps>`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 1080px;
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
  width: 5760px;
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

export const Foreground = styled.img<ForegroundProps>`
  position: absolute;
  ${(props):string => {
    let position = ''
    switch (props.side) {
      case 'left':
        position = 'left: 0; bottom: 0;';
        break
      case 'right':
        position =  'right: 0; bottom: 0;';
        break
      case 'top-right':
        position =  'top: 0; right: 0;';
        break
      case 'top-left':
        position =  'top: 0; left: 0;';
        break
      default:
        position =  'left: 0';
        break
    }
    position =`
    ${position};
     @media (max-height: 900px) {
      display: none;
    }
    @media (max-width: 1380px) {
      display: none;
    }

    `
    return position
  }}
`;

