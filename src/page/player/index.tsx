import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {StatusBar, View} from 'react-native';
import {InfoMediaType} from '../../service/song';
import {playlistContext} from '../../store/playlist';
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

const Player: FC = () => {
  const playlistStore = useContext(playlistContext);
  if (!playlistStore) return <></>;
  const navigation = useNavigation();

  const onPressPlayOrPause = () => {
    playlistStore.setPaused(!playlistStore.paused);
  };

  const onPressRepeatOn = () => {
    playlistStore.setRepeatOn(!playlistStore.repeatOn);
  };

  const onPressShuffleOn = () => {
    playlistStore.setShuffleOn(!playlistStore.shuffleOn);
  };

  const onPressNextTrack = () => {
    if (playlistStore.shuffleOn) {
      playlistStore.setSelectedSong(
        Math.floor(Math.random() * playlistStore.playlist.length),
      );
    } else {
      if (playlistStore.selectedSong === playlistStore.playlist.length - 1) {
        playlistStore.setSelectedSong(0);
      } else {
        playlistStore.setSelectedSong(playlistStore.selectedSong + 1);
      }
    }

    playlistStore.setCurrentTime(0);
    playlistStore.setPaused(false);
  };

  const onPressBackTrack = () => {
    if (playlistStore.shuffleOn) {
      playlistStore.setSelectedSong(
        Math.floor(Math.random() * playlistStore.playlist.length),
      );
    } else {
      if (playlistStore.selectedSong === 0) {
        playlistStore.setSelectedSong(playlistStore.playlist.length - 1);
      } else {
        playlistStore.setSelectedSong(playlistStore.selectedSong - 1);
      }
    }

    playlistStore.setCurrentTime(0);
    playlistStore.setPaused(false);
  };

  const onPressShowLyric = () => {
    navigation.navigate('Lyric');
  };

  const onTimeChange = (value: number) => {
    playlistStore.videoRef.current?.seek(value * (playlistStore.duration + 1));
  };

  const song = playlistStore.playlist[playlistStore.selectedSong];

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header title="" onPressShowLyric={onPressShowLyric} />
      <AlbumArt url={`${coverPrefix}${song.cover}`} />
      <TrackDetails title={song.title} artist={song.listArtist.join(', ')} />
      <SeekBar
        duration={playlistStore.duration}
        currentTime={playlistStore.currentTime}
        onTimeChange={onTimeChange}
      />
      <Controls
        paused={playlistStore.paused}
        repeatOn={playlistStore.repeatOn}
        shuffleOn={playlistStore.shuffleOn}
        onPressPlayOrPause={onPressPlayOrPause}
        onPressRepeatOn={onPressRepeatOn}
        onPressShuffleOn={onPressShuffleOn}
        onPressNextTrack={onPressNextTrack}
        onPressBackTrack={onPressBackTrack}
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
