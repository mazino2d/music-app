import React, {FC} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {playerControlsStyles} from '../../../theme/dark';

interface ControlsProps {
  paused: boolean;
  shuffleOn: boolean;
  repeatOn: number;
  onPressPlayOrPause: () => void;
  onPressShuffleOn: () => void;
  onPressRepeatOn: () => void;
  onPressNextTrack: () => void;
  onPressBackTrack: () => void;
}

const Controls: FC<ControlsProps> = (props: ControlsProps) => {
  return (
    <View style={playerControlsStyles.container}>
      <Icon.Button
        name="shuffle"
        size={20}
        color="#fff"
        backgroundColor="#000"
        style={{opacity: props.shuffleOn ? 1 : 0.3}}
        onPress={props.onPressShuffleOn}
      />

      <Icon.Button
        name="skip-previous"
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressBackTrack}
      />

      <Icon.Button
        name={props.paused ? 'play' : 'pause'}
        size={90}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressPlayOrPause}
      />

      <Icon.Button
        name="skip-next"
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressNextTrack}
      />
      <Icon.Button
        name={props.repeatOn === 2 ? 'repeat-once' : 'repeat'}
        size={20}
        color="#fff"
        backgroundColor="#000"
        style={{opacity: props.repeatOn !== 0 ? 1 : 0.3}}
        onPress={props.onPressRepeatOn}
      />
    </View>
  );
};

export default Controls;
