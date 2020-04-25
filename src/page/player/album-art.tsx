import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

interface AlbumArtProps {
  url: string;
}

const AlbumArt: FC<AlbumArtProps> = (prop: AlbumArtProps) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image style={styles.image} source={{uri: prop.url}} />
    </TouchableOpacity>
  </View>
);

const windowSize = Dimensions.get('window');
const imageSize = windowSize.width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
});

export default AlbumArt;
