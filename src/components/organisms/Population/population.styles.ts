import styled from 'styled-components';

export const Container = styled.div`
    position:absolute;
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 5px;
    justify-items: center;
    align-items: center;
    width: 300px;
    height: 30px;
    bottom: 120px;
    right: 350px;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: xx-large;
    color: ${(props) => props.theme.colors.background}
`;
