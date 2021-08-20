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
  background: linear-gradient(180deg, ${(props) => props.skyColor} 50%, rgba(156,139,219,1) 50%);
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  `;

export const Content = styled.div`
  position:absolute;
  `;

export const Image = styled.img<ImageProps>`
  position:relative;
  width: 100%;
  height: 100vh;
  `;

export const Animation = styled.div<AnimationProps>`
  display: flex;
  position:absolute;  
  width: 100%;
  margin-left: -1px;
  animation: background-shift ${({ speed = 50 }) => speed}s linear infinite forwards;

  @keyframes background-shift {
  to {
    transform: translateX(-100%);
  }
}
  `;
