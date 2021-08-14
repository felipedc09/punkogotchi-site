import styled from 'styled-components';

type ImageBackgroundProps = {
    imagePath: string;
}

const topSpace = 64;

export const Background = styled.div`
  min-width: 1024px;
  min-height: 768px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 16px;
  position:relative;
`;

export const ImageBackground = styled.div<ImageBackgroundProps>`
  position:absolute;
  bottom:0;
  top:0;
  left:0;
  right:0;
  margin: ${topSpace}px 5px ${topSpace}px 5px;
  background-image: url(${(props) => props.imagePath});
  background-repeat: no-repeat;
`;
