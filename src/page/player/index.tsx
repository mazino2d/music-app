import React, {FC, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import AlbumArt from './component/album-art';
import Controls from './component/controls';
import Header from './component/header';
import SeekBar from './component/seek-bar';
import TrackDetails from './component/track-details';

export interface PlayerProps {
  title: string;
  tracks: Tracks[];
}

export interface Tracks {
  song: string;
  artist: string;
  artURI: string;
  songURI: string;
}

const Player: FC<PlayerProps> = (props: PlayerProps) => {
  const [paused, setPaused] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(0);

  const onPressPlayOrPause = () => {
    setPaused(!paused);
  };

  const onPressRepeatOn = () => {
    setRepeatOn(!repeatOn);
  };

  const onPressShuffleOn = () => {
    setShuffleOn(!shuffleOn);
  };

  const onPressNextTrack = () => {
    if (shuffleOn) {
      setSelectedTrack(Math.floor(Math.random() * props.tracks.length));
    } else {
      if (selectedTrack === props.tracks.length - 1) {
        setSelectedTrack(0);
      } else {
        setSelectedTrack(selectedTrack + 1);
      }
    }

    setCurrentTime(0);
    setPaused(false);
  };

  const onPressBackTrack = () => {
    if (shuffleOn) {
      setSelectedTrack(Math.floor(Math.random() * props.tracks.length));
    } else {
      if (selectedTrack === 0) {
        setSelectedTrack(props.tracks.length - 1);
      } else {
        setSelectedTrack(selectedTrack - 1);
      }
    }

    setCurrentTime(0);
    setPaused(false);
  };

  const onLoadSetDuration = (data: OnLoadData) => {
    setDuration(Math.floor(data.duration));
  };

  const onProgressSetCurrentTime = (data: OnProgressData) => {
    setCurrentTime(Math.floor(data.currentTime));
  };

  const track = props.tracks[selectedTrack];

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header title={props.title} />
      <AlbumArt url={track.artURI} />
      <TrackDetails title={track.song} artist={track.artist} />
      <SeekBar duration={duration} currentTime={currentTime} />
      <Controls
        paused={paused}
        repeatOn={repeatOn}
        shuffleOn={shuffleOn}
        onPressPlayOrPause={onPressPlayOrPause}
        onPressRepeatOn={onPressRepeatOn}
        onPressShuffleOn={onPressShuffleOn}
        onPressNextTrack={onPressNextTrack}
        onPressBackTrack={onPressBackTrack}
      />
      <Video
        source={{uri: track.songURI}}
        paused={paused}
        repeat={repeatOn}
        currentTime={currentTime}
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
