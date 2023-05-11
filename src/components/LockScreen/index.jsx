import React from 'react';
import PropTypes from 'prop-types';
import Clock from '../Clock';
import Counter from '../Counter';
import MusicPlayer from '../MusicPlayer';
import { LockScreenContainer, ConfigurationButton } from './styles';
import Icon from '../Icon';

function LockScreen({ setOpenConfig }) {
  const openConfig = () => {
    setOpenConfig(true);
  };
  return (
    <LockScreenContainer>
      <MusicPlayer />
      <Clock />
      <Counter />
      <ConfigurationButton onClick={openConfig}>
        <Icon name="settings" />
      </ConfigurationButton>
    </LockScreenContainer>
  );
}

LockScreen.propTypes = {
  setOpenConfig: PropTypes.func.isRequired,
};

export default LockScreen;
