import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {playerHeaderStyles} from '../../../theme/dark';

interface HeaderProps {
  title: string;
  isBeat: boolean;
  onPressShowLyric: () => void;
  onPressBeatOnly: () => void;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => (
  <View style={playerHeaderStyles.container}>
    <Icon.Button
      name="beats"
      size={20}
      color={playerHeaderStyles.button.color}
      backgroundColor={playerHeaderStyles.button.backgroundColor}
      style={{opacity: props.isBeat ? 1 : 0.3}}
      onPress={props.onPressBeatOnly}
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
