import styled from 'styled-components';

type BarProps ={
    mediaCount: number
}

export const Bar = styled.div<BarProps>`
    padding: 10px 20px 0px 20px;
    display: grid;
    grid-template-columns: ${props => {
        let columns = ''
        for (let index = 0; index < props.mediaCount; index+=1) {
            columns += '1fr ' 
        }
        return columns;
    }};
    column-gap: 15px;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    position: absolute;
    bottom: 64px;
    right: 20px;
    height: 46px;
    background-color: #171516;
    border-radius: 8px 8px 0px 0px;
`;
