import AsyncStorage from '@react-native-community/async-storage';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {StatusBar} from 'react-native';
import _BackgroundTimer from 'react-native-background-timer';
import StackNavigator from './navigator/stack';
import AuthApi, {TokenType} from './service/auth';
import {PlaylistProvider} from './store/playlist';

const App: FC = () => {
  useEffect(() => {
    const atInterval = _BackgroundTimer.setInterval(() => {
      (async () => {
        const refreshToken = await AsyncStorage.getItem('RefreshToken');
        if (refreshToken) {
          const token: TokenType = await AuthApi.post.refreshToken(
            refreshToken,
          );

          AsyncStorage.setItem('AccessToken', token.accessToken);
        }
      })();
    }, 120000);

    const rtInterval = _BackgroundTimer.setInterval(() => {
      (async () => {
        const refreshToken = await AsyncStorage.getItem('RefreshToken');
        if (refreshToken) {
          const token: TokenType = await AuthApi.post.refreshToken(
            refreshToken,
          );

          AsyncStorage.setItem('AccessToken', token.accessToken);
        }
      })();
    }, 3600000);

    return () => {
      _BackgroundTimer.clearInterval(atInterval);
      _BackgroundTimer.clearInterval(rtInterval);
    };
  });

  return (
    <PlaylistProvider>
      <StatusBar hidden />
      <NavigationContainer theme={DarkTheme}>
        <StackNavigator />
      </NavigationContainer>
    </PlaylistProvider>
  );
};

export default App;
