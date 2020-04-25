import Slider from '@react-native-community/slider';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SeekBar: FC = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>02:05</Text>
        <View style={{flex: 1}} />
        <Text style={[styles.text, {width: 40}]}>01:04</Text>
      </View>
      <Slider
        value={0.7}
        style={styles.slider}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
      />
    </View>
  );
};

export default SeekBar;

const styles = StyleSheet.create({
  slider: {
    marginTop: 12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign: 'center',
  },
});
