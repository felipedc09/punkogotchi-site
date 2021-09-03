import styled from 'styled-components';

type ImageContainerdProps = {
    imagePath: string;
}

type ContainerdProps = {
    withBackground?: boolean;
}

const topSpace = 64;

export const Container = styled.main<ContainerdProps>`
  position:relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 1024px;
  height: 768px;
  ${props=>{
    if(props.withBackground){
       return`  background: ${props.theme.colors.background};`
    }
    return ''
  }}
  border-radius: 16px;
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

export const FooterContainer = styled.div`
    position:absolute;
    bottom:0;
    width: 100%;
    height: 64px;
    border-radius: 0px 0px 16px 16px;
    background: ${(props) => props.theme.colors.background};
`
