import styled from 'styled-components';

type BarProps ={
    viewsCount: number
}

export const Bar = styled.div<BarProps>`
    position: relative;
    width: 100%;
    margin-top: 8px;
    display: grid;
    grid-template-columns: ${(props) => {
    let columns = '';
    for (let index = 0; index < props.viewsCount; index += 1) {
      columns += '1fr ';
    }
    return columns;
  }};
    column-gap: 10px;
    justify-items: center;
    align-items: start;
    z-index: 2
`;
