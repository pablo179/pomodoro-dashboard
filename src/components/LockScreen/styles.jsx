import styled, { keyframes } from 'styled-components';

export const LockScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    position: relative;
    
`;

export const LockScreenTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;

const bounce = keyframes`
  from, 6.66%, 17.66%, 33.33% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(50%, 0, 0);
  }

  13.33%, 14.33% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(50%, -30px, 0) scaleY(1.1);
  }

  23.33% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(50%, -15px, 0) scaleY(1.05);
  }

  26.66% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(50%, 0, 0) scaleY(0.95);
  }

  30% {
    transform: translate3d(50%, -4px, 0) scaleY(1.02);
  }
`;

export const ConfigurationButton = styled.button`
    position: absolute;
    bottom: 50px;
    right: 50%;
    transform: translateX(50%);
    font-weight: 400;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    & > span {
        font-size: 35px;
        color: #fff;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    display: none;
    ${LockScreenContainer}:hover & {
        display: block;
        animation: ${bounce} 1s 1;
        animation-fill-mode: both; 
    }
`;
