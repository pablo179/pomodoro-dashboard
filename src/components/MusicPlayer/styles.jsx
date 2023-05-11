import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const Option = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
        opacity: 0.7;
    }
`;

export const TimerMedia = styled.div`
    background-color: #000;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
    opacity: 0.7;
`;
