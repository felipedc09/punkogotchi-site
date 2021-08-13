import styled from 'styled-components';

type BarProps ={
    viewsCount: number
}

export const Bar = styled.div<BarProps>`
    margin-top: 10px;
    display: grid;
    grid-template-columns: ${(props) => {
    let columns = '';
    for (let index = 0; index < props.viewsCount; index += 1) {
      columns += '1fr ';
    }
    return columns;
  }};
    column-gap: 10px;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    position: inherit;
    width: 100%;
    height: 100px;

`;
