import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.foreGroundBackground};
`;

export const ToHomeLink = styled.div`
    position: absolute;
    left: 100px;
    bottom: 0px;
`;
