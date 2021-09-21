import styled from 'styled-components';

type ButtonProps = {
  isSelected?:boolean
}

type IconProps = {
  width: number;
  height: number;
}

const selectedColor = '#F8C53A';

export const Button = styled.a<ButtonProps>`
  display: grid;
  grid-template-rows: 1fr 3fr;
  align-items: center;
  justify-items: center;
  text-decoration: none;
  color:#fff;
  cursor: pointer;
  transition: all .2s ease-in-out;
  :hover{
    transform: scale(1.1);
  }
  svg{
    fill:rgb(144,82,188);
  }
  :hover, :focus {
    svg{
        fill: ${selectedColor};
    }
      color: ${selectedColor};
  } 
  ${props=>props.isSelected ?
    `
        svg{
          fill: ${selectedColor};
        }
        transform: scale(1.1);
        color: ${selectedColor};
    `: ''}
  `;

export const Icon = styled.object<IconProps>`
  display: block;
  width: ${props=> props.width}px;
  height: ${props=> props.height}px;
`;

