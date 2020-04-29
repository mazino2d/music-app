import React, {FC} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {InfoMediaType} from '../../service/song';
import Footer from './component/footer';
import ItemList from './component/item-list';

export interface HomeProps {
  playlists: InfoMediaType[];
}

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView>
        <ItemList />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default Home;
