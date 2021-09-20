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
    height: 40px;
`;

export const Animation = styled.div`
    &:hover, &:focus {
        animation: bellshake .5s cubic-bezier(.36,.07,.19,.97) both;
        backface-visibility: hidden;
        transform-origin: top right;
  }
  @keyframes bellshake {
  0% { transform: rotate(0); }
  15% { transform: rotate(5deg); }
  30% { transform: rotate(-5deg); }
  45% { transform: rotate(4deg); }
  60% { transform: rotate(-4deg); }
  75% { transform: rotate(2deg); }
  85% { transform: rotate(-2deg); }
  92% { transform: rotate(1deg); }
  100% { transform: rotate(0); }
}
`;
