import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import Home from '../page/home';
import Lyric from '../page/lyric';
import Player from '../page/player';

const Stack = createStackNavigator();

const StackNavigator: FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="float"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStatusBarHeight: 0,
      headerStyle: {backgroundColor: 'black'},
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Player" component={Player} />
    <Stack.Screen name="Lyric" component={Lyric} />
  </Stack.Navigator>
);

export default StackNavigator;
