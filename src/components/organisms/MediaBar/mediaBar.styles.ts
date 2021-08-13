import styled from 'styled-components';

type BarProps ={
    mediaCount: number
}

export const Bar = styled.div<BarProps>`
    padding: 10px 20px 0px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    column-gap: 10px;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    position: absolute;
    bottom: 64px;
    right: 20px;
    width: 380px;
    height: 46px;
    background-color: #171516;
    border-radius: 8px 8px 0px 0px;
    a {
        align-self: flex-end;
        width: 100%;
        height: 100%;
    }
    img {
    }
`;
