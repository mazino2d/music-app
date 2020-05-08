import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {playlistContext} from '../../store/playlist';
import Footer from './component/footer';
import ItemList from './component/item-list';

const Home: FC = () => {
  const navigation = useNavigation();
  const playlistStore = useContext(playlistContext);
  if (!playlistStore) return <></>;

  const song = playlistStore.playlist[playlistStore.selectedSong];
  if (!song) return <></>;

  const onPressTitle = () => {
    navigation.navigate('Player');
  };

  const onPressItem = (index: number) => () => {
    playlistStore?.setSelectedSong(index);
    navigation.navigate('Player');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        <ItemList playlist={playlistStore.playlist} onPressItem={onPressItem} />
      </ScrollView>
      <Footer
        title={song.title}
        url={song.cover}
        paused={playlistStore.paused}
        onPressPlayOrPause={playlistStore.onPressPlayOrPause}
        onPressNextTrack={playlistStore.onPressNextTrack}
        onPressBackTrack={playlistStore.onPressBackTrack}
        onPressTitle={onPressTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  list: {
    marginBottom: 50,
  },
});

export default Home;
