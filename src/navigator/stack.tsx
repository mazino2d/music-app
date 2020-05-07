import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import Home from '../page/home';
import Login from '../page/login';
import LyricPlayer from '../page/lyric';
import Player from '../page/player';

const Stack = createStackNavigator();

const StackNavigator: FC = () => (
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="float"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStatusBarHeight: 0,
      headerStyle: {backgroundColor: 'black'},
    }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Player" component={Player} />
    <Stack.Screen name="Lyric" component={LyricPlayer} />
  </Stack.Navigator>
);

export default StackNavigator;
