import styled from 'styled-components';

type CharacterProps = {
    imagePath: string
}

export const Character = styled.div<CharacterProps>`
   > img:first-child {
        content: url(${props=> props.imagePath}.png);
        height: 200px;
    }
    :hover{
        > img:first-child {
            content: url(${props=> props.imagePath}Outline.png);
        }
    }
`;

export const SocialNetworks = styled.div`
   display: inline-block;
   img {
       margin: 2px 10px;
   }
`;
