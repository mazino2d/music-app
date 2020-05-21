import React, {FC, useState} from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {homeHeaderStyles} from '../../../theme/dark';

interface HeaderProps {
  onPressSetting: () => void;
  onPressSearch: (id: number) => () => void;
}

const Header: FC<HeaderProps> = (props) => {
  const [songId, setSongId] = useState(0);

  return (
    <View style={homeHeaderStyles.container}>
      <TextInput
        style={homeHeaderStyles.input}
        keyboardType="number-pad"
        placeholder="Enter sond id"
        placeholderTextColor="gray"
      />
      <Icon.Button
        name="cloud-search-outline"
        color={homeHeaderStyles.button.color}
        backgroundColor={homeHeaderStyles.button.backgroundColor}
        onPress={props.onPressSearch(songId)}
        size={25}
      />
      <Icon.Button
        name="settings-outline"
        color={homeHeaderStyles.button.color}
        backgroundColor={homeHeaderStyles.button.backgroundColor}
        onPress={props.onPressSetting}
        size={25}
      />
    </View>
  );
};

export default Header;
