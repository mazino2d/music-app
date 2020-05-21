import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {InfoMediaType} from 'src/service/playlist';
import SongApi from '../../service/playlist';
import {playlistContext} from '../../store/playlist';
import {homePageStyles} from '../../theme/dark';
import Footer from './component/footer';
import Header from './component/header';
import ItemList from './component/item-list';

const Home: FC = () => {
  const navigation = useNavigation();
  const playlistStore = useContext(playlistContext);
  if (!playlistStore) return <></>;

  useEffect(() => {
    (async () => {
      const data: InfoMediaType[] = await SongApi.mGet.getInfoMedia([
        1076394293,
        1078050656,
        1074800031,
        1079202426,
        1074456159,
        1079543469,
        1079579240,
        1073949836,
        1079243177,
        1075121297,
        1076460518,
        1074151000,
      ]);

      playlistStore?.setPlaylist(data);
    })();
  }, []);

  const song = playlistStore.playlist[playlistStore.selectedSong];
  if (!song) return <></>;

  const onPressTitle = () => {
    navigation.navigate('Player');
  };

  const onPressItem = (index: number) => () => {
    playlistStore?.setSelectedSong(index);
    navigation.navigate('Player');
  };

  const onPressSearch = (id: number) => () => {
    (async () => {
      const data: InfoMediaType[] = await SongApi.mGet.getInfoMedia([id]);

      playlistStore?.setPlaylist(data);
    })();
  };

  const onPressSetting = () => {
    navigation.navigate('Setting');
  };

  return (
    <View style={homePageStyles.container}>
      <Header onPressSearch={onPressSearch} onPressSetting={onPressSetting} />
      <ScrollView style={homePageStyles.itemList}>
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

export default Home;
