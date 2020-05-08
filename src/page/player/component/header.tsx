import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {playerHeaderStyles} from '../../../theme/dark';

interface HeaderProps {
  title: string;
  onPressShowLyric: () => void;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => (
  <View style={playerHeaderStyles.container}>
    <Icon.Button
      name="chevron-down"
      size={20}
      color="#fff"
      backgroundColor="#000"
    />
    <Text style={playerHeaderStyles.title}>{props.title.toUpperCase()}</Text>
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
