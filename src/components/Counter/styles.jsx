import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
    width: 100%;
    min-height: 250px;
    max-width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const TimerLegend = styled.h2`
    font-size: 1.3rem;
    letter-spacing: 1px;
    color: #fff;
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    font-weight: 300;
    position: absolute;
    top: 10px;
    left: 10px;
`;

export const TimerContainer = styled.h1`
    font-size: 10rem;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-weight: 300;
`;

export const ControlPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 60px;
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    ${Container}:hover & {
        display: flex;
    }
`;

export const OptionPanel = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0.5;
    color: #fff;
    ${(props) => !props.isVisible && `
        display: none;
    `}
    &:hover {
        opacity: 1;
    }
    & > span {
        font-size: 35px;
    }
`;
