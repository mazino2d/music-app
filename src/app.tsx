import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './navigator/stack';
import {PlaylistProvider} from './store/playlist';

const App: FC = () => (
  <PlaylistProvider>
    <StatusBar hidden />
    <NavigationContainer theme={DarkTheme}>
      <StackNavigator />
    </NavigationContainer>
  </PlaylistProvider>
);

export default App;
