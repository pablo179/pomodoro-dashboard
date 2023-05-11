import React, { useState, useEffect } from 'react';
import { ClockContainer, ClockTime, AmPm } from './styles';

const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  return {
    hours: hours % 12 === 0 ? 12 : hours % 12,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    ampm,
  };
};

function Clock() {
  const [timeString, setTime] = useState(formatTime(new Date()));

  const refreshClock = () => {
    setTime(formatTime(new Date()));
  };

  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ClockContainer>
      <ClockTime>
        {timeString.hours}
        :
        {timeString.minutes}
      </ClockTime>
      <AmPm>{timeString.ampm}</AmPm>
    </ClockContainer>
  );
}

export default Clock;
