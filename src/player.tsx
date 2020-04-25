import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import Header from './header';
// import AlbumArt from './AlbumArt';
// import TrackDetails from './TrackDetails';
// import SeekBar from './SeekBar';
// import Controls from './Controls';

const Player: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header message="Album nhạc buồn thất tình" />
      {/* <AlbumArt url='https://i.ytimg.com/vi/-EGVaRBv2e0/maxresdefault.jpg' />
                <TrackDetails title={'Ký ức ngủ quên'} artist={'BÍCH PHƯƠNG'} />
                <SeekBar />
                <Controls
                    repeatOn
                    shuffleOn
                    forwardDisabled
                    paused /> */}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#550000',
  },
  audioElement: {
    height: 0,
    width: 0,
  },
};

export default Player;
