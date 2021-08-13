import styled from 'styled-components';

type NormalButtonProps = {
    color: string
}

export const NormalButton = styled.button<NormalButtonProps>`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    background-color: ${(props) => props.color};
`;
