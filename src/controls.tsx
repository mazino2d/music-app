import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface ControlsProps {
  paused: boolean;
  shuffleOn: boolean;
  repeatOn: boolean;
  forwardDisabled: boolean;
}

const Controls: FC<ControlsProps> = (props: ControlsProps) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.0}>
      <Image
        style={[styles.secondaryControl, props.shuffleOn ? [] : styles.off]}
        source={{uri: '../img/ic_shuffle_white.png'}}
      />
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity>
      <Image source={{uri: '../img/ic_skip_previous_white_36pt.png'}} />
    </TouchableOpacity>
    <View style={{width: 20}} />
    {!props.paused ? (
      <TouchableOpacity>
        <View style={styles.playButton}>
          <Image source={{uri: '../img/ic_pause_white_48pt.png'}} />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity>
        <View style={styles.playButton}>
          <Image source={{uri: '../img/ic_play_arrow_white_48pt.png'}} />
        </View>
      </TouchableOpacity>
    )}
    <View style={{width: 20}} />
    <TouchableOpacity disabled={props.forwardDisabled}>
      <Image
        style={[props.forwardDisabled && {opacity: 0.3}]}
        source={{uri: '../img/ic_skip_next_white_36pt.png'}}
      />
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0}>
      <Image
        style={[styles.secondaryControl, props.repeatOn ? [] : styles.off]}
        source={{uri: '../img/ic_repeat_white.png'}}
      />
    </TouchableOpacity>
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
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
