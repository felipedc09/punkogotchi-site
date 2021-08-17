import styled from 'styled-components';

type ColumnsProps = {
    columnsCount: number
}

export const Container = styled.article`
    position: relative; 
    width: 800px;
    height: 470px;
    left: 51%;
    transform: translateX(-51%);
    overflow: auto;
    ::-webkit-scrollbar {display: none;}
    `;

export const Article = styled.article`
    color: ${(props) => props.theme.colors.font};
    text-align: center;
    `;

export const Section = styled.section`
padding: 0% 10%;
`;

export const Columns = styled.div<ColumnsProps>`
    display: grid;
    grid-template-columns: ${(props) => {
    let columns = '';
    for (let index = 0; index < props.columnsCount; index += 1) {
      columns += '1fr ';
    }
    return columns;
  }};
  justify-items: center;
  column-gap: 10px;
`;
