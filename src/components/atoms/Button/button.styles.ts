import styled from 'styled-components';

export const NormalButton = styled.button`
    padding: 8px 13px 8px 13px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5px;
    align-items: center;
    justify-items: center;;
    background-color: ${(props) => props.theme.colors.primary};
    color: #F8F644;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;

`;
