import styled from 'styled-components';

type StepProps ={
    top:string
}

export const StepImage = styled.img<StepProps>`
    position: absolute;
    top: ${(props) => props.top}px;
    right: 41px;
`;
