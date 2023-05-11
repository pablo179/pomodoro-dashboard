/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useEffect } from 'react';
import beautiful from '../../assets/song.mp3';
import { Container, Option, TimerMedia } from './styles';
import Icon from '../Icon';

function MusicPlayer() {
  const audioRef = useRef();
  const handlePlay = () => {
    audioRef.current.play();
  };
  const handlePause = () => {
    audioRef.current.pause();
  };
  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString();
    const seconds = Math.floor(time % 60).toString();
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  };

  const [time, setTime] = useState(formatTime(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(audioRef.current.currentTime));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TimerMedia>
        {time}
      </TimerMedia>
      <Option>
        <Icon name="arrow_back_ios" />
      </Option>
      <Option onClick={handlePlay}>
        <Icon name="play_arrow" />
      </Option>
      <Option onClick={handlePause}>
        <Icon name="pause" />
      </Option>
      <Option onClick={handleStop}>
        <Icon name="stop" />
      </Option>
      <Option>
        <Icon name="arrow_forward_ios" />
      </Option>
      <audio src={beautiful} ref={audioRef} />
    </Container>
  );
}

export default MusicPlayer;
