import Slider from '@react-native-community/slider';
import moment from 'moment';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SeekBarProps {
  duration: number;
  currentTime: number;
}

const SeekBar: FC<SeekBarProps> = (props: SeekBarProps) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.text}>
        {moment(props.duration * 1000).format('mm:ss')}
      </Text>
      <View style={{flex: 1}} />
      <Text style={[styles.text, {width: 40}]}>
        {moment(props.currentTime * 1000).format('mm:ss')}
      </Text>
    </View>
    <Slider
      value={props.currentTime / (props.duration + 1)}
      style={styles.slider}
      minimumTrackTintColor="#fff"
      maximumTrackTintColor="#ffa"
      thumbTintColor="#fff"
    />
  </View>
);

export default SeekBar;

const styles = StyleSheet.create({
  slider: {
    marginTop: 12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign: 'center',
  },
});
