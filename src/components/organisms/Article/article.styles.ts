import styled from 'styled-components';

type ColumnsProps = {
    columnsCount: number
}

export const Container = styled.article`
  position: absolute; 
  top: 120px;
  left:110px;
  right:105px;
  height: 495px;
  overflow: auto;
  ::-webkit-scrollbar {display: none;}
`;

export const Section = styled.section`
  color: ${(props) => props.theme.colors.font};
  text-align: center;
`;

export const Paragraph = styled.div`
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
