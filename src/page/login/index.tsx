import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Alert,
  Button,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import AuthApi, {FailMessageType, SuccessMessageType} from '../../service/auth';
import {loginPageStyles} from '../../theme/dark';

const Login: FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onPressLoginButton = () => {
    (async () => {
      const data:
        | SuccessMessageType
        | FailMessageType = await AuthApi.post.genToken(username, password);

      if (data.err === 0) {
        const accessToken = (data as SuccessMessageType).data.accessToken;
        const refreshToken = (data as SuccessMessageType).data.refreshToken;
        AsyncStorage.setItem('AccessToken', accessToken);
        AsyncStorage.setItem('RefreshToken', refreshToken);
        navigation.navigate('Home');
      } else {
        const err = data.err;
        const msg = data.msg;
        AsyncStorage.removeItem('AccessToken');
        AsyncStorage.removeItem('RefreshToken');
        Alert.alert('Error', `${msg} (${err}).`);
      }
    })();
  };

  return (
    <ImageBackground
      source={{
        uri:
          'https://i.pinimg.com/originals/2a/57/e2/2a57e2929b4a57a9ab69c36dad95a8fc.jpg',
      }}
      resizeMode="cover"
      style={loginPageStyles.image}
      blurRadius={1}>
      <View style={loginPageStyles.container}>
        <SvgUri
          style={loginPageStyles.logo}
          width="250"
          height="200"
          uri="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/logo-mp-3.svg"
        />
        <Text style={loginPageStyles.text}>Username:</Text>
        <TextInput
          style={loginPageStyles.input}
          value={username}
          placeholder="Enter your username"
          placeholderTextColor="gray"
          textContentType="username"
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={loginPageStyles.text}>Password:</Text>
        <TextInput
          style={loginPageStyles.input}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          textContentType="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" color="purple" onPress={onPressLoginButton} />
      </View>
    </ImageBackground>
  );
};

export default Login;
