import styled from 'styled-components';

type ContainerProps={
  skyColor: string
}

type ImageProps={
  position?: string
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.skyColor};
  background: linear-gradient(180deg, ${(props) => props.skyColor} 50%, rgba(156,139,219,1) 50%);
`;

export const Image = styled.img<ImageProps>`
  position:absolute;
  top:0;
  bottom: 0;
  height: 100%;
  width:100%
  `;
