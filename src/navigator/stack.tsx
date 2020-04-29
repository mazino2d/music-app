import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import Home, {HomeProps} from '../page/home';
import Player from '../page/player';

const Stack = createStackNavigator();

const StackNavigator: FC<HomeProps> = (props) => {
  const renderHome = () => <Home playlists={props.playlists} />;

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={renderHome} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
