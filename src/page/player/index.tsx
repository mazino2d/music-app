import React, {FC, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import AlbumArt from './album-art';
import Controls from './controls';
import Header from './header';
import SeekBar from './seek-bar';
import TrackDetails from './track-details';

interface PlayerProps {
  title: string;
  song: string;
  artist: string;
  artURI: string;
  songURI: string;
}
const Player: FC<PlayerProps> = (props: PlayerProps) => {
  const [paused, setPaused] = useState(true);
  const [repeatOn, setRepeatOn] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onPressPlayOrPause = () => {
    setPaused(!paused);
  };

  const onPressRepeatOn = () => {
    setRepeatOn(!repeatOn);
  };

  const onLoadSetDuration = (data: OnLoadData) => {
    setDuration(Math.floor(data.duration));
  };

  const onProgressSetCurrentTime = (data: OnProgressData) => {
    setCurrentTime(Math.floor(data.currentTime));
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header title={props.title} />
      <AlbumArt url={props.artURI} />
      <TrackDetails title={props.song} artist={props.artist} />
      <SeekBar duration={duration} currentTime={currentTime} />
      <Controls
        paused={paused}
        repeatOn={repeatOn}
        onPressPlayOrPause={onPressPlayOrPause}
        onPressRepeatOn={onPressRepeatOn}
      />
      <Video
        source={{uri: props.songURI}}
        paused={paused}
        repeat={repeatOn}
        onLoad={onLoadSetDuration}
        onProgress={onProgressSetCurrentTime}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  audioElement: {
    height: 0,
    width: 0,
  },
};

export default Player;
