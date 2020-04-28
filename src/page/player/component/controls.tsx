import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface ControlsProps {
  paused: boolean;
  shuffleOn: boolean;
  repeatOn: boolean;
  onPressPlayOrPause: () => void;
  onPressShuffleOn: () => void;
  onPressRepeatOn: () => void;
  onPressNextTrack: () => void;
  onPressBackTrack: () => void;
}

const Controls: FC<ControlsProps> = (props: ControlsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.0} onPress={props.onPressShuffleOn}>
        <Image
          style={[styles.secondaryControl, props.shuffleOn ? [] : styles.off]}
          source={require('../../../../img/ic_shuffle_white.png')}
        />
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity onPress={props.onPressBackTrack}>
        <Image
          source={require('../../../../img/ic_skip_previous_white_36pt.png')}
        />
      </TouchableOpacity>
      <View style={{width: 20}} />
      <TouchableOpacity onPress={props.onPressPlayOrPause}>
        <View style={styles.playButton}>
          {!props.paused ? (
            <Image source={require('../../../../img/ic_pause_white_48pt.png')} />
          ) : (
            <Image
              source={require('../../../../img/ic_play_arrow_white_48pt.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <View style={{width: 20}} />
      <TouchableOpacity onPress={props.onPressNextTrack}>
        <Image source={require('../../../../img/ic_skip_next_white_36pt.png')} />
      </TouchableOpacity>
      <View style={{width: 40}} />
      <TouchableOpacity activeOpacity={0.0} onPress={props.onPressRepeatOn}>
        <Image
          style={[styles.secondaryControl, props.repeatOn ? [] : styles.off]}
          source={require('../../../../img/ic_repeat_white.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.3,
  },
});
