import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React, {FC, useContext, useEffect} from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './navigator/stack';
import SongApi, {InfoMediaType} from './service/song';
import {playlistContext, PlaylistProvider} from './store/playlist';

const Main: FC = () => {
  const playlistStore = useContext(playlistContext);

  useEffect(() => {
    (async () => {
      const data: InfoMediaType[] = await SongApi.mGet.getInfoMedia([
        1073981322,
        1079539432,
        1074679839,
        1074101848,
        1074277714,
        1079320018,
        1079215630,
        1075864917,
        1079255307,
        1075832913,
        1076260759,
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
  <PlaylistProvider>
    <StatusBar hidden />
    <Main />
  </PlaylistProvider>
);

export default App;
