import { useState } from 'react';
import { CommonStrings } from '../constants';

enum ButtonLabel {
  PLAY = CommonStrings.PLAY,
  PAUSE = CommonStrings.PAUSE,
}

export const Pomodoro = () => {
  const [buttonTextState, setButtonLabel] = useState(ButtonLabel.PLAY);

  const handleClick = () => {
    switch (buttonTextState) {
      case ButtonLabel.PLAY:
        setButtonLabel(ButtonLabel.PAUSE);
        break;
      case ButtonLabel.PAUSE:
        setButtonLabel(ButtonLabel.PLAY);
        break;
    }
  };

  return <button onClick={handleClick}>{buttonTextState}</button>;
};
