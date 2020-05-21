import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React, {FC, useContext, useEffect} from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './navigator/stack';
import SongApi, {InfoMediaType} from './service/playlist';
import {AuthProvider} from './store/auth';
import {playlistContext, PlaylistProvider} from './store/playlist';

const Main: FC = () => {
  const playlistStore = useContext(playlistContext);

  useEffect(() => {
    (async () => {
      const data: InfoMediaType[] = await SongApi.mGet.getInfoMedia([
        1076394293,
        1078050656,
        1074800031,
        1079202426,
        1074456159,
        1079543469,
        1079579240,
        1073949836,
        1079243177,
        1075121297,
        1076460518,
        1074151000,
      ]);

      playlistStore?.setPlaylist(data);
    })();
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

const App: FC = () => (
  <AuthProvider>
    <PlaylistProvider>
      <StatusBar hidden />
      <Main />
    </PlaylistProvider>
  </AuthProvider>
);

export default App;
