import Slider from '@react-native-community/slider';
import moment from 'moment';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {playerSeekBarStyles} from '../../../theme/dark';

interface SeekBarProps {
  duration: number;
  currentTime: number;
  onTimeChange: (value: number) => void;
}

const SeekBar: FC<SeekBarProps> = (props: SeekBarProps) => (
  <View style={playerSeekBarStyles.container}>
    <View style={{flexDirection: 'row'}}>
      <Text style={playerSeekBarStyles.text}>
        {moment(props.duration * 1000).format('mm:ss')}
      </Text>
      <View style={{flex: 1}} />
      <Text style={[playerSeekBarStyles.text, {width: 40}]}>
        {moment(props.currentTime * 1000).format('mm:ss')}
      </Text>
    </View>
    <Slider
      value={props.currentTime / (props.duration + 1)}
      style={playerSeekBarStyles.slider}
      minimumTrackTintColor="#fff"
      maximumTrackTintColor="#ffa"
      thumbTintColor="#fff"
      onValueChange={props.onTimeChange}
    />
  </View>
);

export default SeekBar;
