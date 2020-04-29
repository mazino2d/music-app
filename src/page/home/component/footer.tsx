import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {playlistContext} from '../../../store/playlist';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w96_r1x1_jpeg/';

const Footer: FC = () => {
  const playlistStore = useContext(playlistContext);
  const navigation = useNavigation();

  const song = playlistStore?.playlist[playlistStore.selectedSong];

  const onPressPlayOrPause = () => {
    playlistStore?.setPaused(!playlistStore?.paused);
  };

  const onPressNextTrack = () => {
    if (playlistStore?.shuffleOn) {
      playlistStore?.setSelectedSong(
        Math.floor(Math.random() * playlistStore?.playlist.length),
      );
    } else {
      if (playlistStore?.selectedSong === playlistStore?.playlist.length - 1) {
        playlistStore?.setSelectedSong(0);
      } else {
        playlistStore?.setSelectedSong(playlistStore?.selectedSong + 1);
      }
    }

    playlistStore?.setCurrentTime(0);
    playlistStore?.setPaused(false);
  };

  const onPressBackTrack = () => {
    if (playlistStore?.shuffleOn) {
      playlistStore?.setSelectedSong(
        Math.floor(Math.random() * playlistStore?.playlist.length),
      );
    } else {
      if (playlistStore?.selectedSong === 0) {
        playlistStore?.setSelectedSong(playlistStore?.playlist.length - 1);
      } else {
        playlistStore?.setSelectedSong(playlistStore?.selectedSong - 1);
      }
    }

    playlistStore?.setCurrentTime(0);
    playlistStore?.setPaused(false);
  };

  const onPressItem = () => {
    navigation.navigate('Player');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={onPressItem}>
        <Image
          style={styles.image}
          source={{uri: `${coverPrefix}${song?.cover}`}}
        />
        <View>
          <Text style={styles.title}>{song?.title}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressBackTrack}>
        <Image
          source={require('../../../../img/ic_skip_previous_white_36pt.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressPlayOrPause}>
        <View>
          {!playlistStore?.paused ? (
            <Image
              source={require('../../../../img/ic_pause_white_48pt.png')}
            />
          ) : (
            <Image
              source={require('../../../../img/ic_play_arrow_white_48pt.png')}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressNextTrack}>
        <Image
          source={require('../../../../img/ic_skip_next_white_36pt.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  item: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 40,
    height: 40,
  },
});
