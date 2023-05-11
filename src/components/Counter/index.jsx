import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import {
  Container, TimerContainer, TimerLegend, ControlPanel, OptionPanel,
} from './styles';

const INTERVALS = {
  POMODORO: '25:00',
  SHORT_BREAK: '05:00',
  LONG_BREAK: '15:00',
};

const SEQUENCE = [
  { name: 'pomodoro', time: INTERVALS.POMODORO },
  { name: 'short break', time: INTERVALS.SHORT_BREAK },
  { name: 'pomodoro', time: INTERVALS.POMODORO },
  { name: 'short break', time: INTERVALS.SHORT_BREAK },
  { name: 'pomodoro', time: INTERVALS.POMODORO },
  { name: 'long break', time: INTERVALS.LONG_BREAK },
  { name: 'pomodoro', time: INTERVALS.POMODORO },
  { name: 'long break', time: INTERVALS.LONG_BREAK },
  { name: 'pomodoro', time: INTERVALS.POMODORO },
];

function Counter() {
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(SEQUENCE[0].time);
  const [isRunning, setIsRunning] = useState(false);
  const [visibility, setVisibility] = useState({
    playButton: true,
    pauseButton: false,
    restartButton: false,
  });

  const refreshTimer = () => {
    const [minutes, seconds] = timer.split(':').map(Number);
    let newMinutes = minutes;
    let newSeconds = seconds;
    if (seconds === 0) {
      newMinutes -= 1;
      newSeconds = 59;
    } else {
      newSeconds -= 1;
    }
    if (newMinutes === 0 && newSeconds === 0) {
      if (currentStep === SEQUENCE.length - 1) {
        setTimer(SEQUENCE[0].time);
        setCurrentStep(0);
        setIsRunning(false);
        return;
      }
      setTimer(SEQUENCE[currentStep + 1].time);
      setCurrentStep(currentStep + 1);
    } else {
      setTimer(`${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`);
    }
  };

  const playTimer = () => {
    setIsRunning(true);
  };
  const pauseTimer = () => {
    setIsRunning(false);
  };
  const restartTimer = () => {
    setTimer(SEQUENCE[0].time);
    setCurrentStep(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const timerInterval = setInterval(refreshTimer, 1000);
      return () => clearInterval(timerInterval);
    }
    return () => {};
  });

  useEffect(() => {
    if (isRunning) {
      setVisibility({
        playButton: false,
        pauseButton: true,
        restartButton: true,
      });
    } else {
      setVisibility({
        playButton: true,
        pauseButton: false,
        restartButton: false,
      });
    }
  }, [isRunning]);

  return (
    <Container>
      <TimerLegend>
        {SEQUENCE[currentStep].name}
      </TimerLegend>
      <TimerContainer>
        {timer}
      </TimerContainer>
      <ControlPanel>
        <OptionPanel onClick={playTimer} isVisible={visibility.playButton}>
          <Icon name="play_arrow" />
        </OptionPanel>
        <OptionPanel onClick={pauseTimer} isVisible={visibility.pauseButton}>
          <Icon name="pause" />
        </OptionPanel>
        <OptionPanel onClick={restartTimer} isVisible={visibility.restartButton}>
          <Icon name="restart_alt" />
        </OptionPanel>
      </ControlPanel>
    </Container>
  );
}

export default Counter;
