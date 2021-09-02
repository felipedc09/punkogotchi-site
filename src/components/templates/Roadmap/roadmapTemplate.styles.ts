import styled from 'styled-components';

type StepItemProps = {
    color: string
    active: boolean
}

export const Screen = styled.div`
    position: absolute;
    top: 110px;
    right: 97px;
    width: 560px;
    height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Crystal = styled.img`
    position: absolute;
    top: 100px;
    right: 90px;
`;

export const StepList = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100px;
    left: 30px;
    width: 290px;
    height: 530px;
    overflow: auto;
    padding: 5px;
`;

export const StepItem = styled.p<StepItemProps>`
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items:center;
    color: ${(props) => props.color};
    padding: 5px;
    margin: 2px 0px;
    border-radius: 5px;
    cursor: pointer;
    :hover{
      color: #fff;
      background-color: ${(props) => (props.active ? '#999' : '#555')};
    }

    ${(props) => {
    if (props.active) {
      return `background-color:#fff;
        color: #000;`;
    }
    return '';
  }}
`;

export const Border = styled.div`
    width: 90%;
    margin : 0 auto;
    border-bottom: 2px solid #fff;
`;
