import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {InfoMediaType} from '../../service/song';
import {playlistContext} from '../../store/playlist';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/';

export interface HomeProps {
  playlists: InfoMediaType[];
}

const Home: FC = () => {
  const navigation = useNavigation();
  const playlistStore = useContext(playlistContext);

  const onPressItem = (index: number) => () => {
    playlistStore?.setSelectedSong(index);
    navigation.navigate('Player');
  };
  const renderItem = () =>
    playlistStore?.playlist.map((value: InfoMediaType, index: number) => (
      <TouchableOpacity key={value.idMedia} onPress={onPressItem(index)}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{uri: `${coverPrefix}${value.cover}`}}
          />
          <View>
            <Text style={styles.title}>{value.title}</Text>
            <Text style={styles.info}>{value.listArtist.join(', ')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ));

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView>{renderItem()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  item: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 64,
    height: 64,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  info: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Home;
