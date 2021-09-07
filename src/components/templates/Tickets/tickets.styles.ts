import styled from 'styled-components';

export const Screen = styled.img`
  position: relative;
  left: 45px;
  width: 426px;
  animation: screen 3s forwards;
  animation-direction: normal;

@keyframes screen {
  0% {
    height: 0px;   
  }
  100% {
    height: 477px;
  }
}
`;

export const Arm = styled.img`
  position: absolute;
  left: 555px;
  top: 70px;
  width: 63px;
  animation: arm 3s forwards;
  animation-direction: normal;

@keyframes arm {
  0% {
    height: 0px;   
  }
  100% {
    height: 165px;
  }
}
`;

export const LoadCharacter = styled.div`
  position: absolute;
  left: 779px;
  top: 331px;
  width: 78px;
  height: 108px;
  background: url("/static/images/tickets/ticketsProgressBackground.png") no-repeat center;
`;

export const LoadMask = styled.img`
position: relative;
  width: 100%;
  height: 100%;
`;

export const LoadAnimation = styled.div`
position: absolute;
  width: 100%;
  animation: load 10s forwards;
  animation-direction: normal;
  background:#59CF93;

@keyframes load {
  0% {
    height: 0px;   
  }
  100% {
    height: 100%;
  }
}
`;