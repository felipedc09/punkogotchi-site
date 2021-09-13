import styled from 'styled-components';

export const CanvasContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 265px;
    left :425px;
    width: 180px;
    height: 240px;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display:none;
    }
`;

export const Canvas = styled.canvas`
    display: block;
    margin: 0;
    color: white;
    width: 400%;
    height: 100%;
`;
