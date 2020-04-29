import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import StackNavigator from './navigator/stack';
import SongApi, {InfoMediaType} from './service/song';

const App: FC = () => {
  const [playlist, setPlaylist] = useState(new Array<InfoMediaType>());

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

      setPlaylist(data);
    })();
  });

  return (
    <NavigationContainer theme={DarkTheme}>
      <StackNavigator playlists={playlist} />
    </NavigationContainer>
  );
};

export default App;
