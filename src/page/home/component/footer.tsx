import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const coverPrefix = 'https://photo-resize-zmp3.zadn.vn/w96_r1x1_jpeg/';

interface FooterProps {
  title: string;
  url: string;
  paused: boolean;
  onPressPlayOrPause: () => void;
  onPressNextTrack: () => void;
  onPressBackTrack: () => void;
  onPressTitle: () => void;
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={props.onPressTitle}>
        <Image
          style={styles.image}
          source={{uri: `${coverPrefix}${props.url}`}}
        />
        <View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>

      <Icon.Button
        name="skip-previous"
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressBackTrack}
      />

      <Icon.Button
        name={props.paused ? 'play' : 'pause'}
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressPlayOrPause}
      />

      <Icon.Button
        name="skip-next"
        size={35}
        color="#fff"
        backgroundColor="#000"
        onPress={props.onPressNextTrack}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  item: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 40,
    height: 40,
  },
});
