import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 3fr 1fr;
    -webkit-column-gap: 5px;
    column-gap: 5px;
    justify-items: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 579px;
    height: 438px;
    bottom: 64px;
    left: 0;
    right: 0;
    margin: auto;
    padding: 300px 130px 0;
    font-size: xx-large;
    background-image: url('/static/images/home/homeBackground2.png');
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.background};
`;
