import styled from 'styled-components';

type CheckboxProps = {
    defaultChecked: boolean
    color: string
}

export const CheckboxContainer = styled.div`
    display: flex;    
    justify-content: center;
    align-content: center;
`;

export const Icon = styled.svg`
    fill: none;
    stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox', readOnly: true })`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
    display: inline-block;
    width: 25px;
    height: 25px;
    background: ${(props) => props.theme.colors.background};
    border: 3px solid ${(props) => props.color};
    border-radius: 3px;
    transition: all 150ms;
    ${Icon} {
        stroke :${(props) => props.color};
        visibility: ${(props) => (props.defaultChecked ? 'visible' : 'hidden')}
    }
`;
