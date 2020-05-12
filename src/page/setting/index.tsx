import {useNavigation} from '@react-navigation/native';
import React, {FC, useContext, useState} from 'react';
import {Button, ScrollView, Switch, Text, View} from 'react-native';
import {authContext} from '../../store/auth';
import {settingPage} from '../../theme/dark';

const Setting: FC = () => {
  const authStore = useContext(authContext);
  if (!authStore) return <></>;
  const navigation = useNavigation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const onPressLogoutButton = () => {
    authStore.setAccessToken('');
    authStore.setRefreshToken('');
    authStore.setErrorCode(0);
    authStore.setErrorMessage('');
    navigation.navigate('Login');
  };

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
      <Button title="Logout" onPress={onPressLogoutButton}  />
    </ScrollView>
  );
};

export default Setting;
