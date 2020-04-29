import React, {FC} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {InfoMediaType} from '../../service/song';
import Item from './component/item';

export interface HomeProps {
  playlists: InfoMediaType[];
}

const Home: FC<HomeProps> = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView>
        {props.playlists.map((value: InfoMediaType) => {
          return <Item key={value.idMedia} playlist={value} />;
        })}
      </ScrollView>
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
  },
  image: {
    borderRadius: 10,
    width: 64,
    height: 64,
  },
});

export default Home;
