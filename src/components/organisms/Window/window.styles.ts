import styled from 'styled-components';

type ImageContainerdProps = {
    imagePath: string;
}

const topSpace = 64;

export const Container = styled.main`
  min-width: 1024px;
  min-height: 768px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 16px;
  position:relative;
`;

export const BackgroundImage = styled.div<ImageContainerdProps>`
  position:absolute;
  bottom:0;
  top:0;
  left:0;
  right:0;
  margin: ${topSpace}px 5px ${topSpace}px 5px;
  background-image: url(${(props) => props.imagePath});
  background-repeat: no-repeat;
`;
