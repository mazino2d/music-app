import React, {FC} from 'react';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import {InfoMediaType} from '../../service/song';
import Item from './component/item';

interface HomeProps {
  playlists: InfoMediaType[];
}

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <StatusBar hidden />
      <ScrollView style={styles.container}>
        {props.playlists.map((value: InfoMediaType) => {
          return <Item key={value.idMedia} {...value} />;
        })}
      </ScrollView>
    </>
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
