import styled from 'styled-components';

export const NormalInput = styled.input`
    width: 110%;
    margin: 5px -25px 5px 0px;
    padding: 6px 30px 6px 15px;
    align-items: center;
    background-color:${(props) => props.theme.colors.background};
    border:solid ${(props) => props.theme.colors.primary} 2px;
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-style: normal;
    border-radius: 8px;
    ::placeholder { 
        color: ${(props) => props.theme.colors.primary};
}
`;
