import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  title: string;
  onPressShowLyric: () => void;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => (
  <View style={styles.container}>
    <Icon.Button
      name="chevron-down"
      size={20}
      color="#fff"
      backgroundColor="#000"
    />
    <Text style={styles.title}>{props.title.toUpperCase()}</Text>
    <Icon.Button
      name="card-text-outline"
      size={20}
      color="#fff"
      backgroundColor="#000"
      onPress={props.onPressShowLyric}
    />
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
    backgroundColor: '#000',
  },
});
