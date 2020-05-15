import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {StatusBar, View} from 'react-native';
import {InfoMediaType} from '../../service/playlist';
import {playlistContext} from '../../store/playlist';
import {playerPage} from '../../theme/dark';
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

  const onPressShowLyric = () => {
    navigation.navigate('Lyric');
  };

  const onPressBeatOnly = () => {
    playlistStore.setIsBeat(!playlistStore.isBeat);
  };

  const song = playlistStore.playlist[playlistStore.selectedSong];

  return (
    <View style={playerPage.container}>
      <StatusBar hidden />
      <Header
        title=""
        isBeat={playlistStore.isBeat}
        onPressShowLyric={onPressShowLyric}
        onPressBeatOnly={onPressBeatOnly}
      />
      <AlbumArt url={`${coverPrefix}${song.cover}`} />
      <TrackDetails title={song.title} artist={song.listArtist.join(', ')} />
      <SeekBar
        duration={playlistStore.duration}
        currentTime={playlistStore.currentTime}
        onTimeChange={playlistStore.onPressSeek}
      />
      <Controls
        paused={playlistStore.paused}
        repeatOn={playlistStore.repeatOn}
        shuffleOn={playlistStore.shuffleOn}
        onPressPlayOrPause={playlistStore.onPressPlayOrPause}
        onPressRepeatOn={playlistStore.onPressRepeatOn}
        onPressShuffleOn={playlistStore.onPressShuffleOn}
        onPressNextTrack={playlistStore.onPressNextTrack}
        onPressBackTrack={playlistStore.onPressBackTrack}
      />
    </View>
  );
};

export default Player;
