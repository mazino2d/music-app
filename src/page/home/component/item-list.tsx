import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {InfoMediaType} from '../../../service/playlist';
import {homeItemListStyles} from '../../../theme/dark';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/';

interface ItemListProps {
  playlist: InfoMediaType[];
  onPressItem: (index: number) => () => void;
}

const ItemList: FC<ItemListProps> = (props) => (
  <>
    {props.playlist.map((value: InfoMediaType, index: number) => (
      <TouchableOpacity key={value.idMedia} onPress={props.onPressItem(index)}>
        <View style={homeItemListStyles.item}>
          <Image
            style={homeItemListStyles.image}
            source={{uri: `${coverPrefix}${value.cover}`}}
          />
          <View>
            <Text style={homeItemListStyles.title}>{value.title}</Text>
            <Text style={homeItemListStyles.artist}>
              {value.listArtist.join(', ')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </>
);

export default ItemList;
