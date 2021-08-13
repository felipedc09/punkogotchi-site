import styled from 'styled-components';

type FormProps ={
    color: string
}

export const Form = styled.form<FormProps>`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    position: absolute;
    bottom: 16px;
    right: 20px;
    width: 380px;
    height: 38px;
`;
