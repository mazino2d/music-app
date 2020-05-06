import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {InfoMediaType} from '../../../service/song';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/';

interface ItemListProps {
  playlist: InfoMediaType[];
  onPressItem: (index: number) => () => void;
}

const ItemList: FC<ItemListProps> = (props) => (
  <>
    {props.playlist.map((value: InfoMediaType, index: number) => (
      <TouchableOpacity key={value.idMedia} onPress={props.onPressItem(index)}>
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
    ))}
  </>
);

const styles = StyleSheet.create({
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

export default ItemList;
