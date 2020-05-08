import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {playerAlbumArtStyles} from '../../../theme/dark';

interface AlbumArtProps {
  url: string;
}

const AlbumArt: FC<AlbumArtProps> = (prop: AlbumArtProps) => (
  <View style={playerAlbumArtStyles.container}>
    <TouchableOpacity>
      <Image style={playerAlbumArtStyles.image} source={{uri: prop.url}} />
    </TouchableOpacity>
  </View>
);

export default AlbumArt;
