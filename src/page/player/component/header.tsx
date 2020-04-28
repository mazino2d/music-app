import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image
        style={styles.button}
        source={require('../../../../img/ic_keyboard_arrow_down_white.png')}
      />
    </TouchableOpacity>
    <Text style={styles.title}>{props.title.toUpperCase()}</Text>
    <TouchableOpacity>
      <Image
        style={styles.button}
        source={require('../../../../img/ic_queue_music_white.png')}
      />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    opacity: 0.72,
  },
});
