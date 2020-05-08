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
      color={playerHeaderStyles.button.color}
      backgroundColor={playerHeaderStyles.button.backgroundColor}
    />
    <Text style={playerHeaderStyles.title}>{props.title.toUpperCase()}</Text>
    <Icon.Button
      name="card-text-outline"
      size={20}
      color={playerHeaderStyles.button.color}
      backgroundColor={playerHeaderStyles.button.backgroundColor}
      onPress={props.onPressShowLyric}
    />
  </View>
);

export default Header;
