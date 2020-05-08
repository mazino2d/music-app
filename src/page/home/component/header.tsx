import React, {FC} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {homeHeaderStyles} from '../../../theme/dark';

interface HeaderProps {
  onPressSetting: () => void;
}

const Header: FC<HeaderProps> = (props) => (
  <View style={homeHeaderStyles.container}>
    <Icon.Button
      name="settings-outline"
      color={homeHeaderStyles.button.color}
      backgroundColor={homeHeaderStyles.button.backgroundColor}
      onPress={props.onPressSetting}
      size={25}
    />
  </View>
);

export default Header;
