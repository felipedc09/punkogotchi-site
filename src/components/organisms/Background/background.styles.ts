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
  bottom: ${(props) => (props.position ? props.position : 20)}%;
  width: 100%;
  `;

export const FrontImage = styled.div<ImageProps>`
  position:absolute;
  background: url("/static/images/frontBackground.svg") no-repeat top left;
  background-size: contain;
  width: 100%;
  height: 100%;
`;
