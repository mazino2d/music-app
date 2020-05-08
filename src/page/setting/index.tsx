import React, {FC, useState} from 'react';
import {ScrollView, Switch, Text, View} from 'react-native';
import {settingPage} from '../../theme/dark';

const Setting: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ScrollView>
      <View style={settingPage.item}>
        <Text style={settingPage.text}>Dark Theme</Text>
        <Switch
          style={settingPage.switch}
          trackColor={{false: '#767577', true: '#B700D4'}}
          thumbColor={isDarkTheme ? '#fff' : '#fff'}
          onValueChange={() => setIsDarkTheme(!isDarkTheme)}
          value={isDarkTheme}
        />
      </View>
    </ScrollView>
  );
};

export default Setting;
