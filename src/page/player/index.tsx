import React, {FC, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import {InfoMediaType} from '../../service/song';
import AlbumArt from './component/album-art';
import Controls from './component/controls';
import Header from './component/header';
import SeekBar from './component/seek-bar';
import TrackDetails from './component/track-details';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/';

export interface PlayerProps {
  title: string;
  playlist: InfoMediaType[];
}

const Player: FC<PlayerProps> = (props: PlayerProps) => {
  if (props.playlist.length === 0) return <></>;

  const [paused, setPaused] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedSong, setSelectedSong] = useState(0);

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
      setSelectedSong(Math.floor(Math.random() * props.playlist.length));
    } else {
      if (selectedSong === props.playlist.length - 1) {
        setSelectedSong(0);
      } else {
        setSelectedSong(selectedSong + 1);
      }
    }

    setCurrentTime(0);
    setPaused(false);
  };

  const onPressBackTrack = () => {
    if (shuffleOn) {
      setSelectedSong(Math.floor(Math.random() * props.playlist.length));
    } else {
      if (selectedSong === 0) {
        setSelectedSong(props.playlist.length - 1);
      } else {
        setSelectedSong(selectedSong - 1);
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

  const song = props.playlist[selectedSong];

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header title={props.title} />
      <AlbumArt url={`${coverPrefix}${song.cover}`} />
      <TrackDetails title={song.title} artist={song.listArtist.join(', ')} />
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
        source={{uri: song.link}}
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
