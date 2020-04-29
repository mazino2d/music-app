import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import Home, {HomeProps} from '../page/home';
import Player from '../page/player';

const Stack = createStackNavigator();

const StackNavigator: FC<HomeProps> = (props) => {
  const renderHome = () => <Home playlists={props.playlists} />;

  const renderItem = () =>
    props.playlists.map((value) => {
      return (
        <Stack.Screen key={value.idMedia} name={value.title}>
          {() => <Player title="ZMD PLAYER" playlist={[value]} />}
        </Stack.Screen>
      );
    });

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={renderHome} />
      {renderItem()}
    </Stack.Navigator>
  );
};

export default StackNavigator;
